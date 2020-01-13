import React from 'react';

import { GlobalContextProvider } from './mgmt.component';

/**
 * This will attempt to generate switch-case like behavior automatically based on the initial state passed to the program. Think of 
 * setState from React except mutating global scope rather than local scope only. This may be changed to run the ruducer with Promies
 * in the future but right now a synchronous function that O(1) is utilized leaving no need until customization is brought into the 
 * picture to do uncertain nature of other peoples code.
 * 
 * @param {Object} Config.stateI This contains the initial state of the funciton and will attempt to generate switch case like behavior
 * @param {Object} Config.children Property used by react to pass child elements and props down chain 
 */
export const Store = ({ stateI, children }) => {
    let valMap = {};
    for (const ele of stateI) {
        valMap[`set${ele}`] = (state, action) => {
            return {
                ...state,
                ele: action[`new${ele}`]
            }
        }
    }

    const initialState = {
        ...stateI
    }

    const reducer = (state, action) => {
        if (valMap.hasOwnProperty(`set${action.type}`)) {
            return valMap[`set${action.type}`](state, action);
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

export const RouterStore = ({ stateI, children }) => {
    const initialState = {
        ...stateI
    }

    const reducer = (state, action) => {
        // console.log(action); // Debug the action being called upon state container
        switch(action.type) {
            case 'changeRoute':
                return {
                    ...state,
                    routes: action.newPath
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
            default:
                return state;
            
        }
    }

    return (
        <GlobalContextProvider initialState={ initialState } reducer={ reducer }>
            { children }
        </GlobalContextProvider>
    );
}