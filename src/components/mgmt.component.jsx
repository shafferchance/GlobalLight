import React, {createContext, useContext, useReducer} from 'react';

const contextStore = {};

// Old system below to test a theory
export const PresetContext = createContext();

export const PresetContextProvider = ({ reducer, initState, children }) => {
    return (
        <PresetContext.Provider value={ useReducer(reducer, initState)}>
            {children}
        </PresetContext.Provider>
    );
}

export const useStateValue = () => useContext(PresetContext);

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
    const Global = contextStore[GlobalContext];
    
    return (
        <Global.Provider value={useReducer(reducer, initialState)}>
            {children}
        </Global.Provider>
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
export const CustContextProvider = ({name, reducer, initialState, children}) => {
    contextStore[name] = createContext();
    const Context = contextStore[name];
    
    return (
        <Context.Provider value={useReducer(reducer, initialState)}>
            {children}
        </Context.Provider>
    );
}

/**
 * Custom hook of sorts that is to be used to access context
 *  
 * @param {String} contextName - Name to get context being stored within context store
 */
export const useCustomContext = (contextName = "GlobalContext") => useContext(contextStore[contextName]);

export const removeContext = (contextName = "GlobalContext") => {
    delete contextStore[contextName];
}  