// Info: Contains Functions Related to Nav Redux state Getter
// (To check selected module in web dashboard)
'use strict';

// Shared Dependencies (Managed by Main Entry Module & Loader)
var Lib;

// Exclusive Dependencies
var CONFIG; // (Managed by Main Entry Module & Loader)


///////////////////////////// Module Exports START /////////////////////////////

/********************************************************************
Load dependencies and configurations

@param {Set} shared_libs - Reference to libraries already loaded in memory by other modules
@param {Set} config - Custom configuration in key-value pairs

@return {Set} - Functions to get Redux Data
*********************************************************************/
module.exports = function(shared_libs, config){

  // Shared Dependencies (Managed my Main Entry Module)
  Lib = shared_libs;

  // Configuration (Managed my Main Entry Module)
  CONFIG = config;

  // Return Public Funtions of this module
  return Nav;

};//////////////////////////// Module Exports END //////////////////////////////



////////////////////////////Public Functions START//////////////////////////////
const Nav = { // Public functions accessible by other modules

  /********************************************************************
  Get Nav-data from Redux

  @param {Reference} redux_selector - Reference to Redux SelectorParam - None

  @return {Set} nav_data (Todo: Change it's name in web dashboard sidebar)
  *********************************************************************/
  getNavDataFromRedux: function(redux_selector){

    if( !Lib.Nus.Utils.isEmpty(redux_selector.Nav) ){
      return redux_selector.Nav;
    }

  },


  /********************************************************************
  Get Nav-data from Redux

  @param {Reference} redux_selector - Reference to Redux SelectorParam - None

  @return {Set} nav_data (Todo: Change it's name in web dashboard sidebar)
  *********************************************************************/
  getNavIndexCollpsedStatus: function(redux_selector){
    //if( !Lib.Nus.Utils.isEmpty(redux_selector.Nav) ){
      return redux_selector.Nav.is_collapsed;
    //}

  },

};////////////////////////////Public Functions END//////////////////////////////
