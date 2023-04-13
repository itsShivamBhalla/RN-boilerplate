// Info: Contains Functions Related to Users-list (Station) Redux state Getter
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
  return UsersList;

};//////////////////////////// Module Exports END //////////////////////////////



////////////////////////////Public Functions START//////////////////////////////
const UsersList = { // Public functions accessible by other modules

  /********************************************************************
  Return Users-list from Redux

  @param {Reference} redux_selector - Reference to Redux Selector

  @return {Set} users_list - Users-list
  *********************************************************************/
  getUsersListFromRedux: function(redux_selector){

    if(
      !Lib.Nus.Utils.isEmpty(redux_selector.UsersList) &&
      !Lib.Nus.Utils.isNullOrUndefined(redux_selector.UsersList['users_list'])
    ){
      return redux_selector.UsersList['users_list'];
    }

  },

};////////////////////////////Public Functions END//////////////////////////////
