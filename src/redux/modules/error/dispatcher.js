// Info: Contains Functions Related to Error Redux state Setters
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
  return DispatchError;

};//////////////////////////// Module Exports END //////////////////////////////



////////////////////////////Public Functions START//////////////////////////////
const DispatchError = { // Public functions accessible by other modules

  /********************************************************************
  Global Error List Dispached in Redux

  @param {Reference} redux_dispatcher - Reference to Redux Dispatcher
  @param {Set} error_message_list - Store Deep Data

  No return
  *********************************************************************/
  updateCommonErrorsListInRedux: function(redux_dispatcher, error_message_list){

    // Update Data in Redux
    return redux_dispatcher({
      type: 'UPDATE_GLOBAL_ERRORS_LIST',
      payload: {common_errors_list: error_message_list},
    });

  },


  /********************************************************************
  Unhandled Error List Dispached in Redux

  @param {Reference} redux_dispatcher - Reference to Redux Dispatcher
  @param {Set} error_message_list - Store Deep Data

  No return
  *********************************************************************/
  updateUnhandledErrorsListInRedux: function(redux_dispatcher, error_message_list){

    // Update Data in Redux
    return redux_dispatcher({
      type: 'UPDATE_UNHANDLED_ERRORS_LIST',
      payload: {unhandled_errors_list: error_message_list},
    });

  },

};////////////////////////////Public Functions END//////////////////////////////
