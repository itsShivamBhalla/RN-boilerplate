// Info: Contains Functions Related to Store Redux state Setters
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
  return DispatchStore;

};//////////////////////////// Module Exports END //////////////////////////////



////////////////////////////Public Functions START//////////////////////////////
const DispatchStore = { // Public functions accessible by other modules

  /********************************************************************
  Store deep data Dispached in Redux

  @param {Reference} redux_dispatcher - Reference to Redux Dispatcher
  @param {Set} store_deep_data - Store Deep Data

  No return
  *********************************************************************/
  updateStoreDeepDataInRedux: function(redux_dispatcher, store_deep_data){

    // Update Data in Redux
    return redux_dispatcher({
      type: 'UPDATE_STORE_DEEP_DATA',
      payload: {store_deep_data: store_deep_data},
    });

  },

};////////////////////////////Public Functions END//////////////////////////////
