// Info: Contains Functions Related to Device-Auth Redux state Getter
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
module.exports = function(shared_libs, config, redux_data){

  // Shared Dependencies (Managed my Main Entry Module)
  Lib = shared_libs;

  // Configuration (Managed my Main Entry Module)
  CONFIG = config;

  // Return Public Funtions of this module
  return DeviceAuth;

};//////////////////////////// Module Exports END //////////////////////////////



////////////////////////////Public Functions START//////////////////////////////
const DeviceAuth = { // Public functions accessible by other modules

  /********************************************************************
  Get Auth-Device-Token from Redux

  @param {Reference} redux_selector - Reference to Redux Selector

  @return {String} auth_device_token - Auth Token
  *********************************************************************/
  getAuthTokenFromRedux: function(redux_selector){
    return _DeviceAuth.getDeviceAuthDataFromRedux(redux_selector)['auth_token'];
  },


  /********************************************************************
  Get Auth-Device Login-Status from Redux

  @param {Reference} redux_selector - Reference to Redux Selector

  @return {Boolean} - Login Status. Null if Login Status in not yet known
  *********************************************************************/
  getLoginStatusFromRedux: function(redux_selector){
    return _DeviceAuth.getDeviceAuthDataFromRedux(redux_selector)['is_logged_in'];
  },


  /********************************************************************
  Get Namespace-Id (Device Brand-Id and Store-Id)from Redux

  @param {Reference} redux_selector - Reference to Redux Selector

  @return {String} namespace_id - brand_id.store_id
  *********************************************************************/
  getNamespaceIdFromRedux: function(redux_selector){
    return _DeviceAuth.getDeviceAuthDataFromRedux(redux_selector)['namespace_id'];
  },

};////////////////////////////Public Functions END//////////////////////////////



//////////////////////////Private Functions START///////////////////////////////
const _DeviceAuth = { // Private functions accessible within this modules only

  /********************************************************************
  Get Auth-Device data from Redux

  @param {Reference} redux_selector - Reference to Redux Selector

  @return {Set} auth_device_data - Auth-Device data
  *********************************************************************/
  getDeviceAuthDataFromRedux: function(redux_selector){
    return redux_selector.AuthDevice;
  },

}; //////////////////////////Private Functions END///////////////////////////////
