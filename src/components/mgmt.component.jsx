import React, {createContext, useContext, useReducer} from 'react';

const contextStore = {};

/**
 * Global State container that has been updated, but kept in-order for 
 * backwards compatibility. Really the custContext component will 
 * function the same.
 * 
 * @param {Function} props.reducer - Function to access and mutate data stored within initial state
 * @param {Object} props.initialState - Initial state for context system
 * @param {Object} props.children - Default value passed with props from react 
 */
export const GlobalContextProvider = ({ reducer, initialState, children }) => {
    contextStore[GlobalContext] = createContext();
    const global = contextStore[GlobalContext];
    return (
        <global.Provider value={useReducer(reducer, initialState)}>
            {children}
        </global.Provider>
    );
}

/**
 * Experimental!
 * 
 * This will append a new context given the name passed to the store and initialize
 * a provider off the newly created context.
 * 
 * @param {String} props.name - Name of the new context
 * @param {Function} props.reducer - The reducer function that will invoked be used upon calling this context
 * @param {Object} props.initialState - Will hold the initial state of the context
 * @param {Object} props.children - Will be passed by default when children present inside of JSX elements
 */
export const custContext = ({name, reducer, initialState, children}) => {
    contextStore[name] = createContext();
    const context = contextStore[name];
    return (
        <context.Provider value={(useReducer(reducer, initialState))}>
            {children}
        </context.Provider>
    );
}

/**
 * Custom hook of sorts that is to be used to access context
 *  
 * @param {String} contextName - Name to get context being stored within context store
 */
export const useStateValue = (contextName = "GlobalContext") => 
    useContext(contextStore[contextName]);

export const removeContext = (contextName = "GlobalContext") => {
    delete contextStore[contextName];
}  