import React, { useState, useEffect } from 'react';
import { useStateValue } from './mgmt.component';

/**
 * This link componenet is set-up to integrate compatibility with the 
 * history API with a native `a` tag.
 * 
 * @param {String} props.url - Url to navigate to
 * @param {String} props.name - Name of link
 * @param {String} props.linkClass - CSS class to style link with
 */
export const Link = ({ url, name, linkClass}) => {
    const [{ currPath }, setPath] = useStateValue(); // Custom Hook for global context
    const handleClick = ev => {
        ev.preventDefault();
        // console.log(currPath) // To debug current path
        window.history.pushState({}, undefined, url); // Purely stores current page with History Browswer API
        setPath({
            type: 'changeRoute',
            newPath: url
        });
    }

    return (
        <a href={'_blank'}
           rel="noopener norefferer"
           onClick={handleClick}
           className={linkClass}>{name}</a>
    );
};

/**
 * This component will store the routes for the SPA, act as the mutator of
 * state for the routing, and push any changes of the url to the History
 * Web API to allow for expected behavior with the browser while reacting
 * to these changes.
 * 
 * Subject to change
 *   Route objects must follow as such:
 *     {
 *          id: [id], 
 *          path: [path], 
 *          name:[name], 
 *          component: [React.Component],
 *          no: [bool] // Optional and will only have effect if using navbar as it will skip rendering this route
 *      }    
 * 
 * @param {Array} RoutesArr - Stores the routes that the application can access
 * @param {Object} children - React default property that has children elements within JSX
 */
export const Router = ({ routesArr, children }) => {
    const [{ id }, setId] = useStateValue();
    const [{ currPath }, setPath] = useStateValue();
    const [{ routes }, setRoutes] = useStateValue();
    const [{ ActiveComp }, setComp] = useStateValue();

    console.log(children);

    useEffect(() => {
        // console.log(`New Path: ${currPath}`); // To print current path
        storeRoutes();
        if (currPath !== undefined) {
            const url = window.location.pathname.split('/').slice(1);
            for (let i of routes) {
                if (currPath === i.path) {
                    setComp({
                        type: 'setActiveComp',
                        newComp: i.component
                    });
                    break;
                }

                /*
                    Not using matchAll for now and will upgrade to do so if 
                    necessary
                */
               const match = i.path.match(/:\w+/g);
               const splitPath = i.path.split('/').slice(1);
               const idx = splitPath.indexOf(match !== null ? match[0] : -1);
               // console.log(match); // Debug regex
               // console.log(idx); // Debug idx
               if (match !== undefined && idx !== -1 &&
                    url[idx - 1].indexOf(splitPath[idx - 1]) !== -1) {
                    setId({
                        type: 'setId',
                        newId: url[idx],
                    });
                    setComp({
                        type: 'setActiveComp',
                        newComp: i.component
                    });
                    break;
                }
            }
        } else {
            storePath(window.location.pathname);
        }
        window.onpopstate = storeLast;
    }, [currPath]);

    const storePath = url => {
        setPath({
            type: 'changeRoute',
            newPath: url
        });
    }

    const storeRoutes = () => {
        setRoutes({
            type: 'setRoutes',
            newRoutes: routesArr
        });
    }

    const storeLast = e => {
        e.preventDefault();
        storePath(window.location.pathname);
    }

    if (ActiveComp === undefined) {
        return (
            <div>
                { children }
                <p>Link not Found!</p>
            </div>
        );
    } else {
        return (
            <div>
                { children }
                { ActiveComp }
            </div>
        );
    }
};

/*

These will be implemented at a later date as they will be used to make
so routes can be passed as jsx rather than array in props.

export const Route = ({ pathT, componentT, nameT }) => {
    return (
        <div path={pathT} comp={componentT} name={nameT}></div>
    );
};

function* generateId() {
    let i = 0;
    while(true) {
        yield i++;
    }
}
*/