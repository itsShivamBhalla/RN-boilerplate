// Info: Load data from Async-Storage
'use strict';


// React Native Base component (Private Scope)
import { View, Dimensions, Platform, StatusBar, Text, TouchableOpacity } from 'react-native';


// React (Private Scope)
import React from 'react';


// Shared Dependencies (Managed by Loader)
var Lib = {};

// Entry file (Managed by Loader)
var App;


// //Redux Provider (Private Scope)
// import { Provider } from 'react-redux';
//
// //Redux PersistGate (Private Scope)
// import { PersistGate } from 'redux-persist/integration/react';
//
// // Toast Provider (Private scope)
// import {ToastProvider} from 'react-native-toast-notifications';
//
// // Modal Provider (Private Scope)
// var {ModalProvider} = require('rn-helper-modal')();


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

  // Private Dependencies
  App = require('./app')(Lib, CONFIG);

};/////////////////////////// Module-Loader END ////////////////////////////////


///////////////////////////// Module Exports START /////////////////////////////
module.exports = function (shared_libs, config) {
  // Run Loader
  loader(shared_libs, config);

  // Return Public Funtions of this module
  return Root;

};//////////////////////////// Module Exports END //////////////////////////////


///////////////////////////Public Functions START///////////////////////////////
const Root = function(props){

  // return (
  //   <>
  //     <Provider store={Lib.ReduxStore}>
  //       <PersistGate loading={null} persistor={Lib.ReduxPersistedStore}>
  //         <ToastProvider>
  //           <ModalProvider>
  //             <StatusBar hidden />
  //             <App />
  //           </ModalProvider>
  //         </ToastProvider>
  //       </PersistGate>
  //     </Provider>
  //   </>
  // );

  return <App />

};//////////////////////////Public Functions END////////////////////////////////


//////////////////////////Private Functions START///////////////////////////////
const _Root = { // Private functions accessible within this modules only
  // None
};//////////////////////////Private Functions END///////////////////////////////
