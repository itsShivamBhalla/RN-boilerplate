// Info: Contains Functions Related to User Redux state Setters
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
  return DispatchUser;

};//////////////////////////// Module Exports END //////////////////////////////



////////////////////////////Public Functions START//////////////////////////////
const DispatchUser = { // Public functions accessible by other modules

  /********************************************************************
  User Deep Data Dispached in Redux

  @param {Reference} redux_dispatcher - Reference to Redux Dispatcher
  @param {Set} user_deep_data - User Deep Data

  No return
  *********************************************************************/
  updateUserDeepDataInRedux: function(redux_dispatcher, user_deep_data){

    // Update User Deep Data in Redux
    return redux_dispatcher({
      type: 'UPDATE_USER_DEEP_DATA',
      payload: {user_deep_data: user_deep_data},
    });

  },


  /********************************************************************
  User data Dispached in Redux

  @param {Reference} redux_dispatcher - Reference to Redux Dispatcher

  No return
  *********************************************************************/
  flushUserDatafromRedux: function(redux_dispatcher){

    // Remove User Deep Data from Redux
    redux_dispatcher({
      type: 'UPDATE_USER_DEEP_DATA',
      payload: {user_deep_data: null},
    });

  },


};////////////////////////////Public Functions END//////////////////////////////
