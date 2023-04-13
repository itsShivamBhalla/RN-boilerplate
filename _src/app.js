// Info: Load data from Async-Storage
'use strict';

// React (Private Scope)
import React from 'react';

// React Native Base component (Private Scope)
import { View, Dimensions, Platform } from 'react-native';

// React Native device info (Private scope)
import DeviceInfo from 'react-native-device-info';

// // Toast library (Private Scope)
// import {useToast} from 'react-native-toast-notifications';

// // Modal Hooks (Private Scope)
// var {useModal} = require('rn-helper-modal')();

// Shared Dependencies (Managed by Loader)
var Lib = {};


// Exclusive Dependencies
var CONFIG; // (Managed by Main Entry Module & Loader)

/////////////////////////// Module-Loader START ////////////////////////////////

/********************************************************************
  Load dependencies and configurations

  @param {Set} shared_libs - Reference to libraries already loaded in memory by other modules
  @param {Set} config - Custom configuration in key-value pairs

  @return nothing
  *********************************************************************/
  const loader = function (shared_libs, config) {

  // Shared Dependencies (Managed my Main Entry Module)
  Lib = shared_libs;

  // Configuration (Managed my Main Entry Module)
  CONFIG = config;

  // Private Dependencies (None)

};/////////////////////////// Module-Loader END ////////////////////////////////


///////////////////////////// Module Exports START /////////////////////////////
module.exports = function (shared_libs, config) {

  // Run Loader
  loader(shared_libs, config);

  // Return Public Funtions of this module
  return App;

};//////////////////////////// Module Exports END //////////////////////////////


///////////////////////////Public Functions START///////////////////////////////
const App = function(props){

  // Initialize and Load modal actions in loader
  Lib.Modal = useModal();

  // Load toast actions in loader
  // Lib.Toast = useToast();

  const Navigator = _App.initNavigator();

  return (
    <View style={Platform.OS == 'web' ? {height: '100vh'} : {height: '100%'}}>
      <Navigator />
    </View>
  );

};//////////////////////////Public Functions END////////////////////////////////


//////////////////////////Private Functions START///////////////////////////////
const _App = { // Private functions accessible within this modules only

  /********************************************************************
  Load Navigator on the basis of screen size

  todo params return
  *********************************************************************/
  initNavigator: function(){

    //if(DeviceInfo.isTablet()){ // If Device is Tablet
      // return require('./apps/device')(Lib, CONFIG);
      return require('./apps/user')(Lib, CONFIG);
    // }
    // else{
    //   return require('./apps/user')(Lib, CONFIG);
    // }

  },

};//////////////////////////Private Functions END///////////////////////////////
