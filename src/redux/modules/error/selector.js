// Info: Contains Functions Related to Error Message List Redux state Getter
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
  return ErrorMessageList;

};//////////////////////////// Module Exports END //////////////////////////////



////////////////////////////Public Functions START//////////////////////////////
const ErrorMessageList = { // Public functions accessible by other modules

  /********************************************************************
  Get Error Message List from Redux

  @param {Reference} redux_selector - Reference to Redux Selector

  @return {Set} error_message_list - Error Message List
  *********************************************************************/
  getErrorMessageListFromRedux: function(redux_selector){
    return redux_selector.Error;
  },

};////////////////////////////Public Functions END//////////////////////////////
