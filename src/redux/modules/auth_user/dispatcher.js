// Info: Contains Functions Related to User-Auth Redux state Setters
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
  return DispatchUserAuth;

};//////////////////////////// Module Exports END //////////////////////////////



////////////////////////////Public Functions START//////////////////////////////
const DispatchUserAuth = { // Public functions accessible by other modules

  /********************************************************************
  User-Auth Dispached in Redux

  @param {Reference} redux_dispatcher - Reference to Redux Dispatcher
  @param {Set} auth_token - User-Auth token

  No return
  *********************************************************************/
  updateAuthTokenInRedux: function(redux_dispatcher, auth_token){

    // Update User Auth-token in Redux
    return redux_dispatcher({
      type: 'UPDATE_USER_AUTH_TOKEN',
      payload: auth_token
    });

  },


  /********************************************************************
  User-Auth Login-Status Dispached in Redux

  @param {Reference} redux_dispatcher - Reference to Redux Dispatcher
  @param {Boolean} is_logged_in - Login Status. Null if Login Status in not yet known

  No return
  *********************************************************************/
  updateLoginStatusInRedux: function(redux_dispatcher, is_logged_in){

    // Update logged-in status in Redux
    return redux_dispatcher({
      type: 'UPDATE_USER_IS_LOGGED_IN',
      payload: is_logged_in
    });

  },


  /********************************************************************
  Namespace-id (Org-Id) Dispached in Redux

  @param {Reference} redux_dispatcher - Reference to Redux Dispatcher
  @param {String} namespace_id - Namespace-Id (Org-Id)

  No return
  *********************************************************************/
  updateNamespaceIdInRedux: function(redux_dispatcher, namespace_id){

    // Update Namespace-Id (Org-Id) in Redux
    return redux_dispatcher({
      type: 'UPDATE_USER_NAMESPACE_ID',
      payload: namespace_id
    });

  },


  /********************************************************************
  User-Auth flushed from Redux

  @param {Reference} redux_dispatcher - Reference to Redux Dispatcher

  No return
  *********************************************************************/
  flushAuthDataFromRedux: function(redux_dispatcher){

    DispatchUserAuth.updateLoginStatusInRedux(redux_dispatcher, false);
    DispatchUserAuth.updateNamespaceIdInRedux(redux_dispatcher, null);
    DispatchUserAuth.updateAuthTokenInRedux(redux_dispatcher, null);

  },

};////////////////////////////Public Functions END//////////////////////////////
