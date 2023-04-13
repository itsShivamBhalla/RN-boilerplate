// Info: Contains Functions Related to User-Auth Redux state Getter
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
  return UserAuth;

};//////////////////////////// Module Exports END //////////////////////////////



////////////////////////////Public Functions START//////////////////////////////
const UserAuth = { // Public functions accessible by other modules

  /********************************************************************
  Get Auth-User-Token from Redux

  @param {Reference} redux_selector - Reference to Redux Selector

  @return {String} auth_device_token - Auth Token
  *********************************************************************/
  getAuthTokenFromRedux: function(redux_selector){
    return _UserAuth.getUserAuthDataFromRedux(redux_selector)['auth_token'];
  },


  /********************************************************************
  Get Auth-User Login-Status from Redux

  @param {Reference} redux_selector - Reference to Redux Selector

  @return {Boolean} - Login Status. Null if Login Status in not yet known
  *********************************************************************/
  getLoginStatusFromRedux: function(redux_selector){
    return _UserAuth.getUserAuthDataFromRedux(redux_selector)['is_logged_in'];
  },


  /********************************************************************
  Get Org-Id from Redux

  @param {Reference} redux_selector - Reference to Redux Selector

  @return {String} Org-id
  *********************************************************************/
  getNamespaceIdFromRedux: function(redux_selector){
    return _UserAuth.getUserAuthDataFromRedux(redux_selector)['namespace_id'];
  },

};////////////////////////////Public Functions END//////////////////////////////



//////////////////////////Private Functions START///////////////////////////////
const _UserAuth = { // Private functions accessible within this modules only

  /********************************************************************
  Get Auth-User data from Redux

  @param {Reference} redux_selector - Reference to Redux Selector

  @return {Set} auth_device_data - Auth-User data
  *********************************************************************/
  getUserAuthDataFromRedux: function(redux_selector){
    return redux_selector.AuthUser;
  },

}; //////////////////////////Private Functions END///////////////////////////////
