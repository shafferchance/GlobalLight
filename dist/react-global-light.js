!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("react-dom")):"function"==typeof define&&define.amd?define(["react","react-dom"],t):"object"==typeof exports?exports.reactGlobalLight=t(require("react"),require("react-dom")):e.reactGlobalLight=t(e.react,e["react-dom"])}(window,(function(e,t){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=2)}([function(t,r){t.exports=e},function(e,r){e.exports=t},function(e,t,r){"use strict";r.r(t),r.d(t,"Store",(function(){return w})),r.d(t,"GlobalStore",(function(){return O})),r.d(t,"RouterStore",(function(){return h})),r.d(t,"CustContextProvider",(function(){return d})),r.d(t,"useCustomContext",(function(){return b})),r.d(t,"Link",(function(){return g})),r.d(t,"Router",(function(){return P})),r.d(t,"Routing",(function(){return x})),r.d(t,"ValTest",(function(){return I})),r.d(t,"OldTest",(function(){return T}));var n=r(0),o=r.n(n),a=Object(n.createContext)(),c=Object(n.createContext)(),u=Object(n.createContext)(),i=Object(n.createContext)(),l=function(e){var t=e.reducer,r=e.initState,c=e.children;return o.a.createElement(a.Provider,{value:Object(n.useReducer)(t,r)},c)},f=function(){return Object(n.useContext)(a)},s=function(e){var t=e.reducer,r=e.initialState,a=e.children;return o.a.createElement(c.Provider,{value:Object(n.useReducer)(t,r)},a)},p=function(e){var t=e.reducer,r=e.initialState,a=e.children;return o.a.createElement(u.Provider,{value:Object(n.useReducer)(t,r)},a)},d=function(e){var t=e.reducer,r=e.initialState,a=e.children;return o.a.createElement(i.Provider,{value:Object(n.useReducer)(t,r)},a)},b=function(e){switch(e){case"routing":case"router":case"Router":return Object(n.useContext)(c);case"global":case"Global":return Object(n.useContext)(u);case"preset":case"Preset":return Object(n.useContext)(a);default:return Object(n.useContext)(i)}};function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){m(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var O=function(e){var t=e.stateI,r=e.children,n={},a={};if("function"==typeof t[Symbol.iterator]){var c=!0,u=!1,i=void 0;try{for(var l,f=function(){var e=l.value;n["set".concat(e)]=function(t,r){return y({},t,{ele:r["new".concat(e)]})}},s=t[Symbol.iterator]();!(c=(l=s.next()).done);c=!0)f()}catch(e){u=!0,i=e}finally{try{c||null==s.return||s.return()}finally{if(u)throw i}}a=y({},t)}else{var d=function(e){n["set".concat(e)]=function(t,r){return y({},t,m({},e,r[e]))}};for(var b in t)d(b);for(var v in t)a[v]=t[v]}return o.a.createElement(p,{initialState:a,reducer:function(e,t){return n.hasOwnProperty(t.type)?n[t.type](e,t):e}},r)},h=function(e){var t=e.stateI,r=e.children,n=y({},t);return o.a.createElement(s,{initialState:n,reducer:function(e,t){switch(t.type){case"changeRoute":return y({},e,{currPath:t.newPath});case"setRoutes":return y({},e,{routes:t.newRoutes});case"setActiveComp":return y({},e,{ActiveComp:t.newComp});case"setId":return y({},e,{id:t.newId});default:return e}}},r)},w=function(e){var t=e.stateI,r=e.children,n=y({},t);return o.a.createElement(d,{reducer:function(e,t){var r=Object.keys(t)[1];switch(t.type){case"setValue":if(e.hasOwnProperty(r)&&void 0!==e[r]&&e[r].hasOwnProperty("graveyard"))throw SyntaxError("Value has been deleted please use recoverValue");return y({},e,m({},r,t[r]));case"deleteValue":return y({},e,m({},r,m({graveyard:!0},r,e[r])));case"recoverValue":return y({},e,m({},r,e[r][r]));default:console.log("Please use setValue or expand reducer with custom function instead of ".concat(t.type)),console.log(e)}},initialState:n},r)};function j(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var r=[],n=!0,o=!1,a=void 0;try{for(var c,u=e[Symbol.iterator]();!(n=(c=u.next()).done)&&(r.push(c.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==u.return||u.return()}finally{if(o)throw a}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var g=function(e){var t=e.url,r=e.name,n=e.linkClass,a=j(b("routing"),2),c=(a[0].currPath,a[1]);return o.a.createElement("a",{href:"_blank",rel:"noopener norefferer",onClick:function(e){e.preventDefault(),window.history.pushState({},void 0,t),c({type:"changeRoute",newPath:t})},className:n},r)},P=function(e){var t=e.routesArr,r=e.children,a=j(b("routing"),2),c=a[0].ActiveComp,u=a[1],i=j(b("routing"),2),l=i[0].currPath,f=i[1],s=j(b("routing"),2),p=(s[0].id,s[1]),d=j(b("routing"),2),v=d[0].routes,y=d[1];Object(n.useEffect)((function(){if(O(),void 0!==l){var e=window.location.pathname.split("/").slice(1),t=!0,r=!1,n=void 0;try{for(var o,a=v[Symbol.iterator]();!(t=(o=a.next()).done);t=!0){var c=o.value;if(l===c.path){u({type:"setActiveComp",newComp:c.component});break}var i=c.path.match(/:\w+/g),f=c.path.split("/").slice(1),s=f.indexOf(null!==i?i[0]:-1);if(void 0!==i&&-1!==s&&-1!==e[s-1].indexOf(f[s-1])){p({type:"setId",newId:e[s]}),u({type:"setActiveComp",newComp:c.component});break}}}catch(e){r=!0,n=e}finally{try{t||null==a.return||a.return()}finally{if(r)throw n}}}else m(window.location.pathname);window.onpopstate=h}),[l]);var m=function(e){f({type:"changeRoute",newPath:e})},O=function(){y({type:"setRoutes",newRoutes:t})},h=function(e){e.preventDefault(),m(window.location.pathname)};return void 0===c?o.a.createElement("div",null,r,o.a.createElement("p",null,"Link not Found!")):o.a.createElement("div",null,r,c)};r(1);function E(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function S(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var x=function(e){var t=e.initialState,r=e.routes,n=e.children,a=r.findIndex((function(e){return window.location.pathname===e.path?e:""})),c=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?E(Object(r),!0).forEach((function(t){S(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},t,{ActiveComp:r[a].component,currPath:window.location.pathname,id:"",routes:r});return o.a.createElement(h,{initialState:c},o.a.createElement(P,{routesArr:r},n))};function C(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function V(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function R(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var r=[],n=!0,o=!1,a=void 0;try{for(var c,u=e[Symbol.iterator]();!(n=(c=u.next()).done)&&(r.push(c.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==u.return||u.return()}finally{if(o)throw a}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var D=function(e){var t=e.name,r=e.children,a=R(b(t),2),c=a[0];a[1];return Object(n.useEffect)((function(){console.log("New Value: ".concat(c.value)),console.log(c.rand)}),[c.value,c.rand]),o.a.createElement("div",null,o.a.createElement("p",null,"New Value ",c.value),o.a.createElement("p",null,"Rand value ",c.rand),r)},k=function(e){var t=e.name,r=e.children,a=R(Object(n.useState)(),2),c=a[0],u=a[1],i=R(b(t),2),l=i[0],f=i[1];Object(n.useEffect)((function(){console.log("How was random trigger?!")}),[l.rand]);return o.a.createElement("div",null,o.a.createElement("p",null,"Last passed value: ",l.value),o.a.createElement("label",{htmlFor:"val"},"New Value: ",o.a.createElement("input",{id:"val",onChange:function(e){console.log(e),u(e.target.value)}})),o.a.createElement("button",{onClick:function(e){e.preventDefault(),f({type:"setValue",value:c})}},"Submit"),r)},A=function(e,t){var r=Object.keys(t)[1];switch(t.type){case"setValue":return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?C(Object(r),!0).forEach((function(t){V(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):C(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e,V({},r,t[r]))}},I=function(e){var t=e.initialState;return o.a.createElement(d,{name:"Val",reducer:A,initialState:t},o.a.createElement(D,{name:"Val"}),o.a.createElement(k,{name:"Val"}))},_=function(e){e.children;var t=R(f(),2),r=t[0].value;t[1];return Object(n.useEffect)((function(){console.log("New value: ".concat(r))}),[r]),o.a.createElement("div",null,o.a.createElement("p",null,"New Value: ",r))},N=function(e){e.children;var t=R(Object(n.useState)(),2),r=t[0],a=t[1],c=R(f(),2),u=(c[0].value,c[1]),i=R(f(),1)[0].rand;Object(n.useEffect)((function(){console.log("How was rand changed?!")}),[i]);return o.a.createElement("div",null,o.a.createElement("label",null,"Input Value: ",o.a.createElement("input",{onChange:function(e){console.log(e),a(e.target.value)}})),o.a.createElement("button",{onClick:function(e){console.log(e.target),u({type:"setValue",value:r})}},"Submit"))},T=function(e){var t=e.initialState;e.children;return o.a.createElement(l,{reducer:A,initState:t},o.a.createElement(_,null),o.a.createElement(N,null))}}])}));