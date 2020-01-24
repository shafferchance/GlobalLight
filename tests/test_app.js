import React from 'react';
import ReactDOM from 'react-dom';

import { Router, RouterStore, Link, useStateValue} from '../src/index.js'

const Test = ({children}) => {
    return (
        <h1>Hello I have successfully rendered!</h1>
    )
}

const NavBar = () => {
    const [{ routes },] = useStateValue("router");

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
    {id: 0, path: '/', name: 'Home', component: <Test />}
]

const initialState = {
    currPath: window.location.pathname,
    ActiveComp: routes[component]["component"],
    routes: [],
    id: ''
};

const component = routes.findIndex(x => {
    const curr = window.location.pathname;
    if (curr === x["path"]) {
        console.log(x);
        return x;
    }
    return '';
});

const App = () => {
    <RouterStore stateI={ initialState }>
        <Router routesArr={ routes }>
            <NavBar></NavBar>
        </Router>
    </RouterStore>
}

window.addEventListener("load", () => {
    const root = document.getElementById("root");
    ReactDOM.render(<App />, root);
});