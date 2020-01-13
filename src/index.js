import React, { Component } from "react";
import PropTypes from "prop-types";

import { Store } from './components/store.component';

/**
 * This is the base class utilizing the code with little to no modifications from the 
 * original source idea. This will change with some additions planned into the library
 * 
 * This will attempt to build a reducer function that matches the initialState passed
 * 
 * @param {Object} StoreConfig.stateI Sets the initial state for the global container
 * @param {Object} StoreConfig.children Passes children elements to be placed within store wrapper
 */
export const BaseStore = ({ stateI, children }) => {
    
}