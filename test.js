const EventEmitter = require('events');

const reducer = (state, action) => {
    const key = Object.keys(action)[1];
    switch (action.type) {
        case "setValue":
            if (state.hasOwnProperty(key)) {
                if (state[key].hasOwnProperty("graveyard")) { throw SyntaxError("Value has been deleted please use recoverValue"); }
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

let state = {
    hello: "other",
};

state = reducer(state, {type: "setValue", value: "value"});
state = reducer(state, {type: "setValue", hello: "another"});
reducer(state, {type: "none"});
state = reducer(state, {type: "deleteValue", hello: ""});
reducer(state, {type: "none"});
state = reducer(state, {type: "recoverValue", hello:""});
console.log(state);