// Info: Reducer for Device-Auth Module (Managed Internally)
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
  return DeviceAuthReducer;

};//////////////////////////// Module Exports END //////////////////////////////



///////////////////////////Public Functions START///////////////////////////////
const DeviceAuthReducer = function(state = _DeviceAuth.InitialState, action){ // Public functions accessible by other modules

  // Update Device-Auth token
  if(action.type === 'UPDATE_DEVICE_AUTH_TOKEN'){
    state = {
      ...state,
      auth_token: action.payload
    }
  }

  // Update Device logged in state
  if(action.type === 'UPDATE_DEVICE_IS_LOGGED_IN'){
     state = {
       ...state,
       is_logged_in: action.payload
     }
  }

  // Update Namespace-Id (Brand-Id and Store-Id) in Redux
  if(action.type === 'UPDATE_DEVICE_NAMESPACE_ID'){
     state = {
       ...state,
       namespace_id: action.payload
     }
  }

  return state;

};///////////////////////////Public Functions END///////////////////////////////



//////////////////////////Private Functions START///////////////////////////////
const _DeviceAuth = { // Private functions accessible within this modules only

  /********************************************************************
  Initial State
  *********************************************************************/
  InitialState: {
    'auth_token': null,
    'is_logged_in': null,
    'namespace_id': null, // Org-Id and Brand-Id and Store-Id
  },

};//////////////////////////Private Functions END///////////////////////////////
