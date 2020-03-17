(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"));
	else if(typeof define === 'function' && define.amd)
		define("reactGlobalLight", ["React"], factory);
	else if(typeof exports === 'object')
		exports["reactGlobalLight"] = factory(require("React"));
	else
		root["reactGlobalLight"] = factory(root["React"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_react__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/composed.component.jsx":
/*!***********************************************!*\
  !*** ./src/components/composed.component.jsx ***!
  \***********************************************/
/*! exports provided: Routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Routing", function() { return Routing; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_component_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store.component.jsx */ "./src/components/store.component.jsx");
/* harmony import */ var _router_component_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./router.component.jsx */ "./src/components/router.component.jsx");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var Routing = function Routing(_ref) {
  var initialState = _ref.initialState,
      routes = _ref.routes,
      children = _ref.children;
  var component = routes.findIndex(function (x) {
    var curr = window.location.pathname;

    if (curr === x["path"]) {
      return x;
    }

    return '';
  });

  var initState = _objectSpread({}, initialState, {
    ActiveComp: routes[component]["component"],
    currPath: window.location.pathname,
    id: '',
    routes: routes
  });

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_store_component_jsx__WEBPACK_IMPORTED_MODULE_1__["RouterStore"], {
    initialState: initState
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_router_component_jsx__WEBPACK_IMPORTED_MODULE_2__["Router"], {
    routesArr: routes
  }, children));
};

/***/ }),

/***/ "./src/components/mgmt.component.jsx":
/*!*******************************************!*\
  !*** ./src/components/mgmt.component.jsx ***!
  \*******************************************/
/*! exports provided: PresetContext, RouterContext, GlobalContext, CustContext, PresetContextProvider, useStateValue, RoutingContextProvider, GlobalContextProvider, CustContextProvider, useCustomContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PresetContext", function() { return PresetContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouterContext", function() { return RouterContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalContext", function() { return GlobalContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustContext", function() { return CustContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PresetContextProvider", function() { return PresetContextProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStateValue", function() { return useStateValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutingContextProvider", function() { return RoutingContextProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalContextProvider", function() { return GlobalContextProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustContextProvider", function() { return CustContextProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCustomContext", function() { return useCustomContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var contextStore = {}; // Will have to experiment with creating a collection of contexts

var PresetContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
var RouterContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
var GlobalContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
var CustContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
var PresetContextProvider = function PresetContextProvider(_ref) {
  var reducer = _ref.reducer,
      initState = _ref.initState,
      children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PresetContext.Provider, {
    value: Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(reducer, initState)
  }, children);
};
var useStateValue = function useStateValue() {
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(PresetContext);
};
var RoutingContextProvider = function RoutingContextProvider(_ref2) {
  var reducer = _ref2.reducer,
      initialState = _ref2.initialState,
      children = _ref2.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RouterContext.Provider, {
    value: Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(reducer, initialState)
  }, children);
};
/**
 * Global State container that has been updated, but kept in-order for 
 * backwards compatibility. Really the custContext component will 
 * function the same.
 * 
 * @param {Function} props.reducer - Function to access and mutate data stored within initial state
 * @param {Object} props.initialState - Initial state for context system
 * @param {Object} props.children - Default value passed with props from react 
 */

var GlobalContextProvider = function GlobalContextProvider(_ref3) {
  var reducer = _ref3.reducer,
      initialState = _ref3.initialState,
      children = _ref3.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(GlobalContext.Provider, {
    value: Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(reducer, initialState)
  }, children);
};
/**
 * Experimental!
 * 
 * This will append a new context given the name passed to the store and initialize
 * a provider off the newly created context.
 * 
 * @param {String} props.name - Name of the new context
 * @param {Function} props.reducer - The reducer function that will invoked be used upon calling this context
 * @param {Object} props.initialState - Will hold the initial state of the context
 * @param {Object} props.children - Will be passed by default when children present inside of JSX elements
 */

var CustContextProvider = function CustContextProvider(_ref4) {
  var reducer = _ref4.reducer,
      initialState = _ref4.initialState,
      children = _ref4.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CustContext.Provider, {
    value: Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(reducer, initialState)
  }, children);
};
/**
 * Custom hook of sorts that is to be used to access context
 *  
 * @param {String} contextName - Name to get context being stored within context store
 */

var useCustomContext = function useCustomContext(contextName) {
  switch (contextName) {
    case "routing":
    case "router":
    case "Router":
      return Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(RouterContext);

    case "global":
    case "Global":
      return Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(GlobalContext);

    case "preset":
    case "Preset":
      return Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(PresetContext);

    default:
      return Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(CustContext);
  }
};
/*
export const removeContext = (contextName = "GlobalContext") => {
    delete contextStore[contextName];
}*/

/***/ }),

/***/ "./src/components/router.component.jsx":
/*!*********************************************!*\
  !*** ./src/components/router.component.jsx ***!
  \*********************************************/
/*! exports provided: Link, Router */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return Link; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return Router; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mgmt_component_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mgmt.component.jsx */ "./src/components/mgmt.component.jsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



/**
 * This link componenet is set-up to integrate compatibility with the 
 * history API with a native `a` tag.
 * 
 * @param {String} props.url - Url to navigate to
 * @param {String} props.name - Name of link
 * @param {String} props.linkClass - CSS class to style link with
 */

var Link = function Link(_ref) {
  var url = _ref.url,
      name = _ref.name,
      linkClass = _ref.linkClass;

  var _useCustomContext = Object(_mgmt_component_jsx__WEBPACK_IMPORTED_MODULE_1__["useCustomContext"])("routing"),
      _useCustomContext2 = _slicedToArray(_useCustomContext, 2),
      currPath = _useCustomContext2[0].currPath,
      setCurrPath = _useCustomContext2[1]; // Custom Hook for global context


  var handleClick = function handleClick(ev) {
    ev.preventDefault(); // console.log(currPath) // To debug current path

    window.history.pushState({}, undefined, url); // Purely stores current page with History Browswer API

    setCurrPath({
      type: 'changeRoute',
      newPath: url
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: '_blank',
    rel: "noopener norefferer",
    onClick: handleClick,
    className: linkClass
  }, name);
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

var Router = function Router(_ref2) {
  var routesArr = _ref2.routesArr,
      children = _ref2.children;

  var _useCustomContext3 = Object(_mgmt_component_jsx__WEBPACK_IMPORTED_MODULE_1__["useCustomContext"])("routing"),
      _useCustomContext4 = _slicedToArray(_useCustomContext3, 2),
      ActiveComp = _useCustomContext4[0].ActiveComp,
      setComp = _useCustomContext4[1];

  var _useCustomContext5 = Object(_mgmt_component_jsx__WEBPACK_IMPORTED_MODULE_1__["useCustomContext"])("routing"),
      _useCustomContext6 = _slicedToArray(_useCustomContext5, 2),
      currPath = _useCustomContext6[0].currPath,
      setPath = _useCustomContext6[1];

  var _useCustomContext7 = Object(_mgmt_component_jsx__WEBPACK_IMPORTED_MODULE_1__["useCustomContext"])("routing"),
      _useCustomContext8 = _slicedToArray(_useCustomContext7, 2),
      id = _useCustomContext8[0].id,
      setId = _useCustomContext8[1];

  var _useCustomContext9 = Object(_mgmt_component_jsx__WEBPACK_IMPORTED_MODULE_1__["useCustomContext"])("routing"),
      _useCustomContext10 = _slicedToArray(_useCustomContext9, 2),
      routes = _useCustomContext10[0].routes,
      setRoutes = _useCustomContext10[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    storeRoutes();

    if (currPath !== undefined) {
      var url = window.location.pathname.split('/').slice(1);
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = routes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var i = _step.value;

          if (currPath === i.path) {
            setComp({
              type: 'setActiveComp',
              newComp: i.component
            });
            break;
          }

          var match = i.path.match(/:\w+/g);
          var splitPath = i.path.split('/').slice(1);
          var idx = splitPath.indexOf(match !== null ? match[0] : -1);

          if (match !== undefined && idx !== -1 && url[idx - 1].indexOf(splitPath[idx - 1]) !== -1) {
            setId({
              type: 'setId',
              newId: url[idx]
            });
            setComp({
              type: 'setActiveComp',
              newComp: i.component
            });
            break;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    } else {
      storePath(window.location.pathname);
    }

    window.onpopstate = storeLast;
  }, [currPath]);

  var storePath = function storePath(url) {
    setPath({
      type: 'changeRoute',
      newPath: url
    });
  };

  var storeRoutes = function storeRoutes() {
    setRoutes({
      type: 'setRoutes',
      newRoutes: routesArr
    });
  };

  var storeLast = function storeLast(e) {
    e.preventDefault();
    storePath(window.location.pathname);
  };

  if (ActiveComp === undefined) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, children, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Link not Found!"));
  } else {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, children, ActiveComp);
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

/***/ }),

/***/ "./src/components/store.component.jsx":
/*!********************************************!*\
  !*** ./src/components/store.component.jsx ***!
  \********************************************/
/*! exports provided: GlobalStore, RouterStore, Store */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalStore", function() { return GlobalStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouterStore", function() { return RouterStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Store", function() { return Store; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mgmt_component_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mgmt.component.jsx */ "./src/components/mgmt.component.jsx");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/**
 * This will attempt to generate switch-case like behavior automatically based on the initial state passed to the program. Think of 
 * setState from React except mutating global scope rather than local scope only. This may be changed to run the ruducer with Promies
 * in the future but right now a synchronous function that O(1) is utilized leaving no need until customization is brought into the 
 * picture to do uncertain nature of other peoples code.
 * 
 * @param {Object} Config.stateI This contains the initial state of the funciton and will attempt to generate switch case like behavior
 * @param {Object} Config.children Property used by react to pass child elements and props down chain 
 */

var GlobalStore = function GlobalStore(_ref) {
  var stateI = _ref.stateI,
      children = _ref.children;
  var valMap = {};
  var initialState = {};

  if (typeof stateI[Symbol.iterator] === "function") {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      var _loop = function _loop() {
        var ele = _step.value;

        valMap["set".concat(ele)] = function (state, action) {
          return _objectSpread({}, state, {
            ele: action["new".concat(ele)]
          });
        };
      };

      for (var _iterator = stateI[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        _loop();
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    initialState = _objectSpread({}, stateI);
  } else {
    var _loop2 = function _loop2(ele) {
      valMap["set".concat(ele)] = function (state, action) {
        return _objectSpread({}, state, _defineProperty({}, ele, action[ele]));
      };
    };

    for (var ele in stateI) {
      _loop2(ele);
    }

    for (var _ele in stateI) {
      initialState[_ele] = stateI[_ele];
    }
  } // Instead of switch-case as below, will check if it exist 


  var reducer = function reducer(state, action) {
    if (valMap.hasOwnProperty(action.type)) {
      return valMap[action.type](state, action);
    } else {
      return state;
    }
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mgmt_component_jsx__WEBPACK_IMPORTED_MODULE_1__["GlobalContextProvider"], {
    initialState: initialState,
    reducer: reducer
  }, children);
};
/**
 * RouterStore will contain the state portion of page routing. This is to
 * have tracibility and set paths linked to componenets.
 * 
 * @param {Object} props.stateI - Contains the routes of the application
 * @param {Object} props.children - React will pass this down by default 
 */

var RouterStore = function RouterStore(_ref2) {
  var stateI = _ref2.stateI,
      children = _ref2.children;

  var initialState = _objectSpread({}, stateI);

  var reducer = function reducer(state, action) {
    // console.log(action); // Debug the action being called upon state container
    switch (action.type) {
      case 'changeRoute':
        return _objectSpread({}, state, {
          currPath: action.newPath
        });

      case 'setRoutes':
        return _objectSpread({}, state, {
          routes: action.newRoutes
        });

      case 'setActiveComp':
        return _objectSpread({}, state, {
          ActiveComp: action.newComp
        });

      case 'setId':
        return _objectSpread({}, state, {
          id: action.newId
        });

      default:
        return state;
    }
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mgmt_component_jsx__WEBPACK_IMPORTED_MODULE_1__["RoutingContextProvider"], {
    initialState: initialState,
    reducer: reducer
  }, children);
};
/**
 * This is the Generic store that has four generic options in the reducer
 * function used for state mutation. These functions are:
 *      - setValue
 *          x Will create or update values that are specified
 *          x However, if they value has been deleted then an error will 
 *            be thrown
 *      - deleteValue
 *          x A graveyard flag is added to the value, and the previously
 *            stored value is archieved
 *      - recoverValue
 *          x Will remove the graveyard flag and reset the value to the
 *            one that was archieved
 * 
 * Please note that action objects must be formatted as:
 *      {type: [action], [key]: [value]}
 * The reasoning is that the key is calculated with the keys of the Object
 * thus even if the function doesn't take a value any must be passed as it 
 * will be "thrown out" by the GC. This maybe changed eventually.
 * 
 * @param {String} name - Name of the context container
 * @param {Object} stateI - Object containing the initial values of this generic state object 
 */

var Store = function Store(_ref3) {
  var stateI = _ref3.stateI,
      children = _ref3.children;

  var initState = _objectSpread({}, stateI);

  var reducer = function reducer(state, action) {
    var key = Object.keys(action)[1];

    switch (action.type) {
      case "setValue":
        if (state.hasOwnProperty(key)) {
          if (state[key] !== undefined && state[key].hasOwnProperty("graveyard")) {
            throw SyntaxError("Value has been deleted please use recoverValue");
          }
        }

        return _objectSpread({}, state, _defineProperty({}, key, action[key]));

      case "deleteValue":
        return _objectSpread({}, state, _defineProperty({}, key, _defineProperty({
          graveyard: true
        }, key, state[key])));

      case "recoverValue":
        return _objectSpread({}, state, _defineProperty({}, key, state[key][key]));

      default:
        console.log("Please use setValue or expand reducer with custom function instead of ".concat(action.type));
        console.log(state);
        break;
    }
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mgmt_component_jsx__WEBPACK_IMPORTED_MODULE_1__["CustContextProvider"], {
    reducer: reducer,
    initialState: initState
  }, children);
};

/***/ }),

/***/ "./src/components/test.component.jsx":
/*!*******************************************!*\
  !*** ./src/components/test.component.jsx ***!
  \*******************************************/
/*! exports provided: ValTest, OldTest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValTest", function() { return ValTest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OldTest", function() { return OldTest; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mgmt_component_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mgmt.component.jsx */ "./src/components/mgmt.component.jsx");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var EffectTest = function EffectTest(_ref) {
  var name = _ref.name,
      children = _ref.children;

  var _useCustomContext = Object(_mgmt_component_jsx__WEBPACK_IMPORTED_MODULE_1__["useCustomContext"])(name),
      _useCustomContext2 = _slicedToArray(_useCustomContext, 2),
      state = _useCustomContext2[0],
      dispatch = _useCustomContext2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    console.log("New Value: ".concat(state.value));
    console.log(state.rand);
  }, [state.value, state.rand]);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "New Value ", state.value), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Rand value ", state.rand), children);
};

var ValueEle = function ValueEle(_ref2) {
  var name = _ref2.name,
      children = _ref2.children;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      _useState2 = _slicedToArray(_useState, 2),
      inputVal = _useState2[0],
      setInputVal = _useState2[1];

  var _useCustomContext3 = Object(_mgmt_component_jsx__WEBPACK_IMPORTED_MODULE_1__["useCustomContext"])(name),
      _useCustomContext4 = _slicedToArray(_useCustomContext3, 2),
      state = _useCustomContext4[0],
      dispatch = _useCustomContext4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    console.log("How was random trigger?!");
  }, [state.rand]);

  var handleClick = function handleClick(e) {
    e.preventDefault();
    dispatch({
      type: "setValue",
      value: inputVal
    });
  };

  var handleInput = function handleInput(e) {
    console.log(e);
    setInputVal(e.target.value);
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Last passed value: ", state.value), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "val"
  }, "New Value: ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    id: "val",
    onChange: handleInput
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: handleClick
  }, "Submit"), children);
};

var reducer = function reducer(state, action) {
  var key = Object.keys(action)[1];

  switch (action.type) {
    case "setValue":
      return _objectSpread({}, state, _defineProperty({}, key, action[key]));

    default:
      break;
  }
};

var ValTest = function ValTest(_ref3) {
  var initialState = _ref3.initialState;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mgmt_component_jsx__WEBPACK_IMPORTED_MODULE_1__["CustContextProvider"], {
    name: "Val",
    reducer: reducer,
    initialState: initialState
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(EffectTest, {
    name: "Val"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ValueEle, {
    name: "Val"
  }));
};

var OldEffect = function OldEffect(_ref4) {
  var children = _ref4.children;

  var _useStateValue = Object(_mgmt_component_jsx__WEBPACK_IMPORTED_MODULE_1__["useStateValue"])(),
      _useStateValue2 = _slicedToArray(_useStateValue, 2),
      value = _useStateValue2[0].value,
      setVal = _useStateValue2[1]; //const [{ rand },] = useStateValue();


  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    console.log("New value: ".concat(value));
  }, [value]);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "New Value: ", value));
};

var OldValue = function OldValue(_ref5) {
  var children = _ref5.children;

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      _useState4 = _slicedToArray(_useState3, 2),
      input = _useState4[0],
      setInput = _useState4[1];

  var _useStateValue3 = Object(_mgmt_component_jsx__WEBPACK_IMPORTED_MODULE_1__["useStateValue"])(),
      _useStateValue4 = _slicedToArray(_useStateValue3, 2),
      value = _useStateValue4[0].value,
      setVal = _useStateValue4[1];

  var _useStateValue5 = Object(_mgmt_component_jsx__WEBPACK_IMPORTED_MODULE_1__["useStateValue"])(),
      _useStateValue6 = _slicedToArray(_useStateValue5, 1),
      rand = _useStateValue6[0].rand;

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    console.log("How was rand changed?!");
  }, [rand]);

  var handleInput = function handleInput(e) {
    console.log(e);
    setInput(e.target.value);
  };

  var handleSubmit = function handleSubmit(e) {
    console.log(e.target);
    setVal({
      type: "setValue",
      value: input
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Input Value: ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    onChange: handleInput
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: handleSubmit
  }, "Submit"));
};

var OldTest = function OldTest(_ref6) {
  var initialState = _ref6.initialState,
      children = _ref6.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mgmt_component_jsx__WEBPACK_IMPORTED_MODULE_1__["PresetContextProvider"], {
    reducer: reducer,
    initState: initialState
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(OldEffect, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(OldValue, null));
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: Store, GlobalStore, RouterStore, CustContextProvider, RoutingContextProvider, useCustomContext, Link, Router, Routing, ValTest, OldTest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_store_component_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/store.component.jsx */ "./src/components/store.component.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Store", function() { return _components_store_component_jsx__WEBPACK_IMPORTED_MODULE_0__["Store"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GlobalStore", function() { return _components_store_component_jsx__WEBPACK_IMPORTED_MODULE_0__["GlobalStore"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RouterStore", function() { return _components_store_component_jsx__WEBPACK_IMPORTED_MODULE_0__["RouterStore"]; });

/* harmony import */ var _components_mgmt_component_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/mgmt.component.jsx */ "./src/components/mgmt.component.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CustContextProvider", function() { return _components_mgmt_component_jsx__WEBPACK_IMPORTED_MODULE_1__["CustContextProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RoutingContextProvider", function() { return _components_mgmt_component_jsx__WEBPACK_IMPORTED_MODULE_1__["RoutingContextProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useCustomContext", function() { return _components_mgmt_component_jsx__WEBPACK_IMPORTED_MODULE_1__["useCustomContext"]; });

/* harmony import */ var _components_router_component_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/router.component.jsx */ "./src/components/router.component.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return _components_router_component_jsx__WEBPACK_IMPORTED_MODULE_2__["Link"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return _components_router_component_jsx__WEBPACK_IMPORTED_MODULE_2__["Router"]; });

/* harmony import */ var _components_composed_component_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/composed.component.jsx */ "./src/components/composed.component.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Routing", function() { return _components_composed_component_jsx__WEBPACK_IMPORTED_MODULE_3__["Routing"]; });

/* harmony import */ var _components_test_component_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/test.component.jsx */ "./src/components/test.component.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ValTest", function() { return _components_test_component_jsx__WEBPACK_IMPORTED_MODULE_4__["ValTest"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OldTest", function() { return _components_test_component_jsx__WEBPACK_IMPORTED_MODULE_4__["OldTest"]; });








/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ });
});
//# sourceMappingURL=react-global-light.js.map