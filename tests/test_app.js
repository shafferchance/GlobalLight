import React from 'react';
import ReactDOM from 'react-dom';

import { Router, RouterStore, Link, useCustomContext, ValTest} from '../dist/react-global-light.js'
//import { OldTest } from '../dist/react-global-light.js';

const Test = () => {
    return (
        <h1>Hello I have successfully rendered!</h1>
    )
}

const Another = () => {
    return (
        <h1>Hello another page has changed!</h1>
    );
}

const NavBar = () => {
    //console.log(this);
    const [{ routes },] = useCustomContext();
    console.log(routes);
    return (
        <div>
            { routes.map((val) => {
                if (val.no === undefined) {
                    return (
                        <Link key={ val.id }
                              url={ val.path }
                              name={ val.name }
                        />
                    )
                } else {
                    return;
                }
            })}
        </div>
    )
}

const routes = [
    {id: 0, path: '/', name: 'Home', component: <Test />},
    {id: 1, path: '/test', name: 'Another', component: <Another />}
];

const component = routes.findIndex(x => {
    const curr = window.location.pathname;
    if (curr === x["path"]) {
        return x;
    }
    return '';
});

const App = ({ initialState }) => {
    return (
        <RouterStore stateI={ initialState }>
            <Router routesArr={ routes }>
                <NavBar></NavBar>
            </Router>
        </RouterStore>
    );
}

window.addEventListener("load", () => {
    const root = document.getElementById("root");
    ReactDOM.render(<App initialState = { {
        currPath: window.location.pathname,
        routes: routes,
        ActiveComp: routes[component]["component"],
        id: ''
    } }/>, root);
});

/*
window.addEventListener("load", () => {
    const root = document.getElementById("root");
    ReactDOM.render(<ValTest initialState={{value: 0, rand: 0}} />, root);
});*/