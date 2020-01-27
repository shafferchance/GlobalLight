import React, { Children } from 'react';
import ReactDOM from 'react-dom';

import { RouterStore, Router, Routing, Link, useCustomContext, CustContextProvider, ValTest} from '../dist/react-global-light.js'
//import { OldTest } from '../dist/react-global-light.js';

const Test = () => {
    return (
        <CustContextProvider>
            <h1>Nested component here</h1>
        </CustContextProvider>
    );
}

const Another = () => {
    return (
        <h1>Hello another page has changed!</h1>
    );
}

const NavBar = () => {
    const [{ routes },] = useCustomContext();

    return (
        <div>
            { routes !== undefined ? routes.map((val) => {
                if (val.no === undefined) {
                    return (
                        <Link key={ val.id }
                              url={ val.path }
                              name={ val.name }
                        />
                    );
                } else {
                    return;
                }
            }) : undefined}
        </div>
    );
}

const routes = [
    {id: 0, path: '/', name: 'Home', component: <Test />},
    {id: 1, path: '/test', name: 'Another', component: <Another />}
];

const App = ({ initialState }) => {
    return (
        <Routing initialState={ initialState } routes={ routes }>
            <NavBar></NavBar>
        </Routing>
    );
}

window.addEventListener("load", () => {
    const root = document.getElementById("root");
    ReactDOM.render(<App />, root);
});
