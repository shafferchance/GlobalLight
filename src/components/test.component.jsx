import React, { useEffect, useState } from 'react';
import { PresetContextProvider, useStateValue, useCustomContext, CustContextProvider } from './mgmt.component.jsx';

// These are test designed to show the capabilities of the Global State system

/*
    Tests values updating and calling re-render cycles properly
*/
const EffectTest = ({name, children}) => {
    const [state, dispatch] = useCustomContext(name);

    useEffect(() => {
        console.log(`New Value: ${state.value}`);
        console.log(state.rand);
    }, [state.value, state.rand]);

    return (
        <div>
            <p>New Value { state.value }</p>
            <p>Rand value { state.rand }</p>
            { children }
        </div>
    );
}

/*
    Tests setting inputs with the Global Store
*/
const ValueEle = ({ name, children }) => {
    const [inputVal, setInputVal] = useState();
    const [state, dispatch] = useCustomContext(name);

    useEffect(() => {
        console.log("How was random trigger?!");
    }, [state.rand])

    // Global store setting values
    const handleClick = e => {
        e.preventDefault();
        dispatch({
            type: "setValue",
            value: inputVal
        });
    }

    // Normal way of submitting change to local state
    const handleInput = e => {
        console.log(e);
        setInputVal(e.target.value);
    }

    return (
        <div>
            <p>Last passed value: { state.value }</p>
            <label htmlFor="val">New Value: <input id="val" onChange={ handleInput }></input></label>
            <button onClick={ handleClick }>Submit</button>
            { children }
        </div>
    );
}

// Reducer function example
const reducer = (state, action) => {
    const key = Object.keys(action)[1];
    switch (action.type) {
        case "setValue":
            return {
                ...state,
                [key]: action[key]
            }
        default:
            break;
    }
}

// Base element of for testing adding objects
export const ValTest = ({ initialState }) => {
    return (
        <CustContextProvider name="Val" reducer={ reducer } initialState={ initialState }>
            <EffectTest name="Val" />
            <ValueEle name="Val" />
        </CustContextProvider>
    );
}

// Old system, this is much more direct of the context being used and not as flexible as the new system
const OldEffect = () => {
    const [{ value }, setVal] = useStateValue(); // Notice the Context is automatically handed by this custom hook
    //const [{ rand },] = useStateValue();

    useEffect(() => {
        console.log(`New value: ${value}`);
    }, [value]);

    // Display
    return (
        <div>
            <p>New Value: {value}</p>
        </div>
    );
}

// Old value, this is for setting the vlaue in global state with the old system
const OldValue = () => {
    const [input, setInput] = useState();
    const [, setVal] = useStateValue();
    const [{ rand },] = useStateValue();

    useEffect(() => {
        console.log("How was rand changed?!");
    }, [rand]);

    const handleInput = e => {
        console.log(e);
        setInput(e.target.value);
    }

    // Setting the value in the old is similar to the new except for the big difference being type verb
    const handleSubmit = e => {
        console.log(e.target);
        setVal({
            type: "setValue",
            value: input
        });
    }

    return (
        <div>
            <label>Input Value: <input onChange={ handleInput }/></label>
            <button onClick={ handleSubmit }>Submit</button>
        </div>
        
    );
}

// Base componenet for the old test
export const OldTest = ({ initialState }) => {
    return (
        <PresetContextProvider reducer={ reducer } initState={ initialState }>
            <OldEffect />
            <OldValue />
        </PresetContextProvider>
    );
}