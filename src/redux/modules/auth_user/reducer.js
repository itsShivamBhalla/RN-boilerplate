// Info: Reducer for User-Auth Module (Managed Internally)
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
  return UserAuthReducer;

};//////////////////////////// Module Exports END //////////////////////////////



///////////////////////////Public Functions START///////////////////////////////
const UserAuthReducer = function(state = _UserAuth.InitialState, action){ // Public functions accessible by other modules

  // Update User-Auth token
  if(action.type === 'UPDATE_USER_AUTH_TOKEN'){
    state = {
      ...state,
      auth_token: action.payload
    }
  }

  // Update User logged in state
  if(action.type === 'UPDATE_USER_IS_LOGGED_IN'){
     state = {
       ...state,
       is_logged_in: action.payload
     }
  }

  // Update Namespace-Id (Org-Id) in state
  if(action.type === 'UPDATE_USER_NAMESPACE_ID'){
     state = {
       ...state,
       namespace_id: action.payload
     }
  }

  return state;

};///////////////////////////Public Functions END///////////////////////////////



//////////////////////////Private Functions START///////////////////////////////
const _UserAuth = { // Private functions accessible within this modules only

  /********************************************************************
  Initial State
  *********************************************************************/
  InitialState: {
    'auth_token': null,
    'is_logged_in': null,
    'namespace_id': null, // Org-Id
  },

};//////////////////////////Private Functions END///////////////////////////////
