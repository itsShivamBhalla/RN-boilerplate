// Info: To punch User Testing (Used in Station-App)
'use strict';

// React (Private Scope)
import React from 'react';

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

  // Private Dependencies - Module specific Modals (Modals are directly injected into global Modals)
  //require('./modals')(Lib, CONFIG);

};/////////////////////////// Module-Loader END ////////////////////////////////



///////////////////////////// Module Exports START /////////////////////////////
module.exports = function (shared_libs, config) {

  // Run Loader
  loader(shared_libs, config);

  // Return Public Funtions of this module
  return Testing;

};//////////////////////////// Module Exports END //////////////////////////////


///////////////////////////Public Functions START///////////////////////////////
const Testing = function(props){

  console.log('anlkans');


  // // Initialize Navigator
  let Navigator = _Testing.initNavigator();

  // Return Navigator
  return <Navigator/>;

};//////////////////////////Public Functions END////////////////////////////////



//////////////////////////Private Functions START///////////////////////////////
const _Testing = { // Private functions accessible within this modules only

  /********************************************************************
  Load Navigator on the basis of screen size

  No params

  @return {Jsx} Navigator Component
  *********************************************************************/
  initNavigator: function(){

    // // Get window viewport width
    const {Dimensions} = require('react-native');
    const windowWidth = Dimensions.get('window').width;

    // Determine weather this device is large screen or small screen
    //if(windowWidth <= CONFIG.WIDTH_MAX_MOBILE){
    if(windowWidth <= 480){
      // Small Size
      return require('./size/small/navigation/navigator')(Lib, CONFIG); // Same as Large navigator
    }
    else{

      console.log('akdbakdb 3');

      // Large Size
      return require('./size/large/navigation/navigator')(Lib, CONFIG);
    }

  },

};//////////////////////////Private Functions END///////////////////////////////
