// Info: Contains Functions Related to Brand Redux state Setters
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

@return {Set} - Functions to update Redux Data
*********************************************************************/
module.exports = function(shared_libs, config){

  // Shared Dependencies (Managed my Main Entry Module)
  Lib = shared_libs;

  // Configuration (Managed my Main Entry Module)
  CONFIG = config;

  // Return Public Funtions of this module
  return Brand;

};//////////////////////////// Module Exports END //////////////////////////////



////////////////////////////Public Functions START//////////////////////////////
const Brand = { // Public functions accessible by other modules

  /********************************************************************
  Brand List Dispached in Redux

  @param {Reference} redux_dispatcher - Reference to Redux Dispatcher
  @param {Set} brand_list - Brand Deep Data

  No return
  *********************************************************************/
  updateBrandListInRedux: function(redux_dispatcher, brand_list){

    // Update Data in Redux
    return redux_dispatcher({
      type: 'UPDATE_BRAND_LIST',
      payload: brand_list,
    });

  },


  /********************************************************************
  Brand deep data Dispached in Redux

  @param {Reference} redux_dispatcher - Reference to Redux Dispatcher
  @param {Set} brand_deep_data - Brand Deep Data

  No return
  *********************************************************************/
  updateBrandDeepDataInRedux: function(redux_dispatcher, brand_deep_data){

    // Update Data in Redux
    return redux_dispatcher({
      type: 'UPDATE_BRAND_DEEP_DATA',
      payload: {brand_deep_data: brand_deep_data},
    });

  },

};////////////////////////////Public Functions END//////////////////////////////
