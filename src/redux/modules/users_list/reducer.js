// Info: Reducer for Users-list (Station) (Used in Station-App)
'use strict';

// Shared Dependencies (Managed by Loader)
var Lib = {};

// Exclusive Dependencies
var CONFIG; // (Managed by Main Entry Module & Loader)


/////////////////////////// Module-Loader START ////////////////////////////////

  /********************************************************************
  Load dependencies and configurations

  @param {Set} shared_libs - Reference to libraries already loaded in memory by other modules
  @param {Set} config - Custom configuration in key-value pairs

  @return nothing
  *********************************************************************/
  const loader = function(shared_libs, config){

    // Shared Dependencies (Managed my Main Entry Module)
    Lib = shared_libs;

    // Configuration (Managed my Main Entry Module)
    CONFIG = config;

  };

//////////////////////////// Module-Loader END /////////////////////////////////


//////////////////////////// Module Exports START /////////////////////////////
module.exports = function(shared_libs, config){

  // Run Loader
  loader(shared_libs, config);

  // Export Public Interfaces of this module
  return UsersList;

};//////////////////////////// Module Exports END //////////////////////////////



///////////////////////////Public Functions START///////////////////////////////
const UsersList = function(state = _UsersList.InitialState, action){ // Public functions accessible by other modules

  if(action.type === 'UPDATE_USERS_LIST'){

    state = {
      ...state,
      users_list: action.payload.users_list
    };

  }

  return state;

};///////////////////////////Public Functions END///////////////////////////////



//////////////////////////Private Functions START///////////////////////////////
const _UsersList = { // Private functions accessible within this modules only

  /********************************************************************
  Initial State
  *********************************************************************/
  InitialState: {
  },

};//////////////////////////Private Functions END///////////////////////////////
