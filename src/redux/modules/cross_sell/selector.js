// Info: Contains Functions Related to Cross-Sell-list Redux state Setters
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
  return CrossSell;

};//////////////////////////// Module Exports END //////////////////////////////



////////////////////////////Public Functions START//////////////////////////////
const CrossSell = { // Public functions accessible by other modules

  /********************************************************************
  Get Cross-Sell-list from Redux

  @param {Reference} redux_selector - Reference to Redux Selector

  @return {Set} cross_sell_list - Cross-Sell-list
  *********************************************************************/
  getCrossSellListFromRedux: function(redux_selector){

    if( !Lib.Nus.Utils.isEmpty(redux_selector.CrossSell) ){
      return redux_selector.CrossSell;
    }

  },

};////////////////////////////Public Functions END//////////////////////////////
