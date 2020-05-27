import React from 'react';

import { GlobalContextProvider, RoutingContextProvider ,CustContextProvider } from './mgmt.component.jsx';

/**
 * This will attempt to generate switch-case like behavior automatically based on the initial state passed to the program. Think of 
 * setState from React except mutating global scope rather than local scope only. This may be changed to run the ruducer with Promies
 * in the future but right now a synchronous function that O(1) is utilized leaving no need until customization is brought into the 
 * picture to do uncertain nature of other peoples code.
 * 
 * Values cannot be mapped if they are not in the initial state
 * 
 * @param {Object} Config.stateI This contains the initial state of the funciton and will attempt to generate switch case like behavior
 * @param {Object} Config.children Property used by react to pass child elements and props down chain 
 */
export const GlobalStore = ({ stateI, children }) => {
    let valMap = {};
    let initialState = {};

    /* 
        Symbol.iterator is a built in Symbol that is used with generators and for...of 
        loops as these for a function on Symbol.iterator. Hence why a function is
        the Right Hand Side (RHS) is the logical equivalence check of value and type
    */
    if (typeof stateI[Symbol.iterator] === "function") {
        // Generating functions for values passed in the initial state
        for (const ele of stateI) {
            // Placing this bound anaonymous functions for each entry in the initial state, stateIZ
            valMap[`set${ele}`] = (state, action) => {
                // Since an object is being updated all the values must be placed in then the updated value
                // setState from class-based components does this for the user, hooks do not
                return {
                    ...state,
                    ele: action[`new${ele}`] /* The symbol declaritive style for objects is used here as it "hides" the property 
                                                on print and allows for var key explicitly */
                }
            }
        }
        /// Initializing state
        initialState = {
            ...stateI
        }
    } else {
        // Generating function as above, but using the key each passed instead here as for...in will return object keys
        for (const ele in stateI) {
            valMap[`set${ele}`] = (state, action) => {
                return {
                    ...state,
                    [ele]: action[ele]
                }
            }
        }
        // Maybe redundant now, but would have to check. Spread operator may work better. Initializes state
        for (const ele in stateI) {
            initialState[ele] = stateI[ele];
        }
    }

    /*
        Instead of switch-case as below, will check if the property requested exists.
        If not the current state is returned with no warning or error. This should
        likely be changed.

        A reducer function takes some current state and an action object
            In this implementation once the action object is recieved the following occurs:
                1. Action.type is checked if it exist as a property of the generated
                   functions from above

                   If true, then pass the parameters to invoke the logic generated above
                   If false, then return the current state
    */
    const reducer = (state, action) => {
        if (process.env.DEBUG) {
            console.groupCollapsed("Routing: ")
            console.log(state);
            console.log(action);
            console.log(valMap);
            console.groupEnd();
        }
        if (valMap.hasOwnProperty(action.type)) {
            return valMap[action.type](state, action);
        } else {
            return state;
        }
    }
    
    return (
        <GlobalContextProvider initialState={ initialState } reducer={ reducer }>
            { children }
        </GlobalContextProvider>
    );
};

/**
 * RouterStore will contain the state portion of page routing. This is to
 * have tracibility and set paths linked to componenets.
 * 
 * @param {Object} props.stateI - Contains the routes of the application
 * @param {Object} props.children - React will pass this down by default 
 */
export const RouterStore = ({ stateI, children }) => {
    const initialState = {
        ...stateI
    }

    const reducer = (state, action) => {
        if (process.env.DEBUG) {
            console.groupCollapsed("Reducer Action: ");
            console.log(action); // Debug the action being called upon state container
            console.groupEnd();
        }

        switch (action.type) {
            case 'changeRoute':
                return {
                    ...state,
                    currPath: action.newPath
                };
            case 'setRoutes':
                return {
                    ...state,
                    routes: action.newRoutes
                };
            case 'setActiveComp':
                return {
                    ...state,
                    ActiveComp: action.newComp
                };
            case 'setId':
                return {
                    ...state,
                    id: action.newId
                };
            case `set${action.key}`:
                return {
                    ...state,
                    [action.key]: action.value
                }
            default:
                return state;
        }
    }

    return (
        <RoutingContextProvider initialState={ initialState } reducer={ reducer }>
            { children }
        </RoutingContextProvider>
    );
}

/**
 * This is the Generic store that has four generic options in the reducer
 * function used for state mutation. These functions are:
 *      - setValue
 *          x Will create or update values that are specified
 *          x However, if they value has been deleted then an error will 
 *            be thrown
 *      - deleteValue
 *          x A graveyard flag is added to the value, and the previously
 *            stored value is archieved
 *      - recoverValue
 *          x Will remove the graveyard flag and reset the value to the
 *            one that was archieved
 * 
 * Please note that action objects must be formatted as:
 *      {type: [action], [key]: [value]}
 * The reasoning is that the key is calculated with the keys of the Object
 * thus even if the function doesn't take a value any must be passed as it 
 * will be "thrown out" by the GC. This maybe changed eventually.
 * 
 * @param {String} name - Name of the context container
 * @param {Object} stateI - Object containing the initial values of this generic state object 
 */
export const Store = ({ stateI, children }) => {
    const initState = {
        ...stateI
    }

    const reducer = (state, action) => {
        const key = Object.keys(action)[1];
        switch (action.type) {
            case "setValue":
                if (state.hasOwnProperty(key)) {
                    if (state[key] !== undefined && 
                            state[key].hasOwnProperty("graveyard")) { throw SyntaxError("Value has been deleted please use recoverValue"); }
                }
                return {
                    ...state,
                    [key]: action[key]
                };
                
            case "deleteValue":
                return {
                    ...state,
                    [key]: {graveyard: true, [key]: state[key]}
                };
            case "recoverValue":
                return {
                    ...state,
                    [key]: state[key][key]
                };
            default:
                console.log(`Please use setValue or expand reducer with custom function instead of ${action.type}`)
                console.log(state);
                break;
        }
    }

    return (
        <CustContextProvider reducer={ reducer } initialState={ initState }>
            { children}
        </CustContextProvider>  
    );
}