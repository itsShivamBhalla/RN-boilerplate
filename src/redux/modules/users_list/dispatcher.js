// Info: Contains Functions Related to Users-list (Station) Redux state Setters
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
  return UsersList;

};//////////////////////////// Module Exports END //////////////////////////////



////////////////////////////Public Functions START//////////////////////////////
const UsersList = { // Public functions accessible by other modules

  /********************************************************************
  Users-list Dispached in Redux

  @param {Reference} redux_dispatcher - Reference to Redux Dispatcher
  @param {Set} users_list - Users-list (Station)

  No return
  *********************************************************************/
  updateUsersListInRedux: function(redux_dispatcher, users_list){

    // Update Data in Redux
    return redux_dispatcher({
      type: 'UPDATE_USERS_LIST',
      payload: {users_list: users_list},
    });

  },

};////////////////////////////Public Functions END//////////////////////////////
