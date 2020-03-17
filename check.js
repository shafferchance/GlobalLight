import React, { useReducer } from 'react';

const ctxt = {};

const Store = ({ name, initState, children }) => {
  const currState = {
      ...initState
  }
  ctxt[name] = React.createContext();

  const context = ctxt[name];
  
  const reducer = (state, action) => {
    const key = Object.keys(action)[1];
    switch(action.type) {
      case "setValue":
        return {
          state,
          [key]: action[key]
        };
      default:
        break;
    }
  };
  
  return (
    <context.Provider value={ useReducer(reducer, currState) }>
      { children }
    </context.Provider>
  );
}

// const App = () => {
//   return (
//     <Store name={ "global" } initialState={ {"hello": "another"} }>
//       <h1>Checking if crashes...</h1>
//     </Store>
//   );
// }
// window.addEventListener("load", () => ReactDOM.render(<App />, document.getElementById("app")));
