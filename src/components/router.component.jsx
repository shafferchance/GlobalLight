import React, { useEffect } from 'react';
import { useCustomContext } from './mgmt.component.jsx';
import { ErrorBoundary } from './ErrorBoundary.component.jsx';

/**
 * This link componenet is set-up to integrate compatibility with the 
 * history API with a native `a` tag.
 * 
 * @param {String} props.url               - Url to navigate to
 * @param {String} props.name              - Name of link
 * @param {String} props.className         - CSS class to style link with
 * @param {React.Component} [props.Button] - Button element
 */
export const Link = ({ url, name, className, Button}) => {
    const [, setCurrPath] = useCustomContext("routing"); // Custom Hook for global context
    const handleClick = ev => {
        ev.preventDefault();
        // console.log(currPath) // To debug current path
        window.history.pushState({}, undefined, url); // Purely stores current page with History Browswer API
        setCurrPath({
            type: 'changeRoute',
            newPath: url
        });
    }

    if (Button) {
        return (
            <Button className={className} onClick={handleClick}>{name}</Button>
        );
    } else {
        return (
            <a className={className} onClick={handleClick}>
                { children }
            </a>
        )
    }


    // return (
    //     <a href={'_blank'}
    //        rel="noopener norefferer"
    //        onClick={handleClick}
    //        className={linkClass}>{name}</a>
    // );
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
export const Router = ({ routesArr, className, children }) => {
    const [{ ActiveComp }, setComp] = useCustomContext("routing");
    const [{ currPath }, setPath] = useCustomContext("routing");
    const [, setId] = useCustomContext("routing");
    const [{ routes }, setRoutes] = useCustomContext("routing");

    useEffect(() => {
        setRoutes({
            type: 'setRoutes',
            newRoutes: routesArr
        });
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
                pathIdx = 0;
                const match = i.path.match(/:\w+/g);
                const splitPath = i.path.split('/').slice(1);
                const idx = splitPath.indexOf(match !== null ? match[0] : -1);
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
            setPath({
                type: 'changeRoute',
                newPath: window.location.pathname
            });
        }
        window.onpopstate = e => {
            e.preventDefault();
            setPath({
                type: 'changeRoute',
                newPath: window.location.pathname
            });
        }
    }, [currPath, routes, setComp, setId, setPath, routesArr, setRoutes]);

    if (ActiveComp === undefined) {
        return (
            <div className={className}>
                { Header }
                <div className={"container"}>
                    { children }
                    <p>Link not Found!</p>
                </div>
                { Footer }
            </div>
        );
    } else {
        return (
            <div className={className}>
                { Header }
                <ErrorBoundary>
                    { ActiveComp }
                </ErrorBoundary>
                { Footer }
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