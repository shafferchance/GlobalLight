!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("react"),require("react-dom")):"function"==typeof define&&define.amd?define(["exports","react","react-dom"],t):t((e=e||self)["react-global-light"]={},e.React,e["React DOM"])}(this,function(e,y,t){"use strict";var w="default"in y?y.default:y;function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function m(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach(function(e){p(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var u,l=e[Symbol.iterator]();!(r=(u=l.next()).done)&&(n.push(u.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==l.return||l.return()}finally{if(a)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t;function n(e){var t=e.reducer,n=e.initState,r=e.children;return w.createElement(E.Provider,{value:y.useReducer(t,n)},r)}function l(){return y.useContext(E)}function a(e){var t=e.reducer,n=e.initialState,r=e.children;return w.createElement(O.Provider,{value:y.useReducer(t,n)},r)}function h(e){var t=e.reducer,n=e.initialState,r=e.children;return w.createElement(S.Provider,{value:y.useReducer(t,n)},r)}function o(e){var t=e.reducer,n=e.initialState,r=e.children;return w.createElement(C.Provider,{value:y.useReducer(t,n)},r)}function g(e){switch(e){case"routing":case"router":case"Router":return y.useContext(O);case"global":case"Global":return y.useContext(S);case"preset":case"Preset":return y.useContext(E);default:return y.useContext(C)}}function u(e){var t=e.stateI,n=e.children,r=m({},t);return w.createElement(a,{initialState:r,reducer:function(e,t){switch(t.type){case"changeRoute":return m({},e,{currPath:t.newPath});case"setRoutes":return m({},e,{routes:t.newRoutes});case"setActiveComp":return m({},e,{ActiveComp:t.newComp});case"setId":return m({},e,{id:t.newId});default:return e}}},n)}function c(e){var t=e.routesArr,n=e.children,r=b(g("routing"),2),a=r[0].ActiveComp,s=r[1],o=b(g("routing"),2),f=o[0].currPath,u=o[1],l=b(g("routing"),2),d=(l[0].id,l[1]),c=b(g("routing"),2),v=c[0].routes,i=c[1];y.useEffect(function(){if(m(),void 0!==f){var e=window.location.pathname.split("/").slice(1),t=!0,n=!1,r=void 0;try{for(var a,o=v[Symbol.iterator]();!(t=(a=o.next()).done);t=!0){var u=a.value;if(f===u.path){s({type:"setActiveComp",newComp:u.component});break}var l=u.path.match(/:\w+/g),c=u.path.split("/").slice(1),i=c.indexOf(null!==l?l[0]:-1);if(void 0!==l&&-1!==i&&-1!==e[i-1].indexOf(c[i-1])){d({type:"setId",newId:e[i]}),s({type:"setActiveComp",newComp:u.component});break}}}catch(e){n=!0,r=e}finally{try{t||null==o.return||o.return()}finally{if(n)throw r}}}else p(window.location.pathname);window.onpopstate=h},[f]);var p=function(e){u({type:"changeRoute",newPath:e})},m=function(){i({type:"setRoutes",newRoutes:t})},h=function(e){e.preventDefault(),p(window.location.pathname)};return void 0===a?w.createElement("div",null,n,w.createElement("p",null,"Link not Found!")):w.createElement("div",null,n,a)}function i(e){var t=e.name,n=e.children,r=b(g(t),2),a=r[0];return r[1],y.useEffect(function(){console.log("New Value: ".concat(a.value)),console.log(a.rand)},[a.value,a.rand]),w.createElement("div",null,w.createElement("p",null,"New Value ",a.value),w.createElement("p",null,"Rand value ",a.rand),n)}function s(e){var t=e.name,n=e.children,r=b(y.useState(),2),a=r[0],o=r[1],u=b(g(t),2),l=u[0],c=u[1];return y.useEffect(function(){console.log("How was random trigger?!")},[l.rand]),w.createElement("div",null,w.createElement("p",null,"Last passed value: ",l.value),w.createElement("label",{htmlFor:"val"},"New Value: ",w.createElement("input",{id:"val",onChange:function(e){console.log(e),o(e.target.value)}})),w.createElement("button",{onClick:function(e){e.preventDefault(),c({type:"setValue",value:a})}},"Submit"),n)}function f(e,t){var n=Object.keys(t)[1];switch(t.type){case"setValue":return m({},e,p({},n,t[n]))}}function d(e){e.children;var t=b(l(),2),n=t[0].value;return t[1],y.useEffect(function(){console.log("New value: ".concat(n))},[n]),w.createElement("div",null,w.createElement("p",null,"New Value: ",n))}function v(e){e.children;var t=b(y.useState(),2),n=t[0],r=t[1],a=b(l(),2),o=(a[0].value,a[1]),u=b(l(),1)[0].rand;return y.useEffect(function(){console.log("How was rand changed?!")},[u]),w.createElement("div",null,w.createElement("label",null,"Input Value: ",w.createElement("input",{onChange:function(e){console.log(e),r(e.target.value)}})),w.createElement("button",{onClick:function(e){console.log(e.target),o({type:"setValue",value:n})}},"Submit"))}var E=y.createContext(),O=y.createContext(),S=y.createContext(),C=y.createContext();e.CustContextProvider=o,e.GlobalStore=function(e){var t=e.stateI,n=e.children,r={},a={};if("function"==typeof t[Symbol.iterator]){var o=!0,u=!1,l=void 0;try{for(var c,i=function(){var n=c.value;r["set".concat(n)]=function(e,t){return m({},e,{ele:t["new".concat(n)]})}},s=t[Symbol.iterator]();!(o=(c=s.next()).done);o=!0)i()}catch(e){u=!0,l=e}finally{try{o||null==s.return||s.return()}finally{if(u)throw l}}a=m({},t)}else{var f=function(n){r["set".concat(n)]=function(e,t){return m({},e,p({},n,t[n]))}};for(var d in t)f(d);for(var v in t)a[v]=t[v]}return w.createElement(h,{initialState:a,reducer:function(e,t){return r.hasOwnProperty(t.type)?r[t.type](e,t):e}},n)},e.Link=function(e){var t=e.url,n=e.name,r=e.linkClass,a=b(g("routing"),2),o=(a[0].currPath,a[1]);return w.createElement("a",{href:"_blank",rel:"noopener norefferer",onClick:function(e){e.preventDefault(),window.history.pushState({},void 0,t),o({type:"changeRoute",newPath:t})},className:r},n)},e.OldTest=function(e){var t=e.initialState;e.children;return w.createElement(n,{reducer:f,initState:t},w.createElement(d,null),w.createElement(v,null))},e.Router=c,e.RouterStore=u,e.Routing=function(e){var t=e.initialState,n=e.routes,r=e.children,a=n.findIndex(function(e){return window.location.pathname===e.path?e:""}),o=m({},t,{ActiveComp:n[a].component,currPath:window.location.pathname,id:"",routes:n});return w.createElement(u,{initialState:o},w.createElement(c,{routesArr:n},r))},e.RoutingContextProvider=a,e.Store=function(e){var t=e.stateI,n=e.children,r=m({},t);return w.createElement(o,{reducer:function(e,t){var n=Object.keys(t)[1];switch(t.type){case"setValue":if(e.hasOwnProperty(n)&&void 0!==e[n]&&e[n].hasOwnProperty("graveyard"))throw SyntaxError("Value has been deleted please use recoverValue");return m({},e,p({},n,t[n]));case"deleteValue":return m({},e,p({},n,p({graveyard:!0},n,e[n])));case"recoverValue":return m({},e,p({},n,e[n][n]));default:console.log("Please use setValue or expand reducer with custom function instead of ".concat(t.type)),console.log(e)}},initialState:r},n)},e.ValTest=function(e){var t=e.initialState;return w.createElement(o,{name:"Val",reducer:f,initialState:t},w.createElement(i,{name:"Val"}),w.createElement(s,{name:"Val"}))},e.useCustomContext=g,Object.defineProperty(e,"__esModule",{value:!0})});
