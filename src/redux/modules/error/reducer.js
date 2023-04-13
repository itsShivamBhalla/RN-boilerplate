// Info: Redux Actions for Error Module (Managed Internally)
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
  return ErorrReducer;

};//////////////////////////// Module Exports END //////////////////////////////



///////////////////////////Public Functions START///////////////////////////////
const ErorrReducer = function(state = _Error.InitialState, action){ // Public functions accessible by other modules

  if(action.type === 'UPDATE_GLOBAL_ERRORS_LIST'){
    state = {
      ...state,
      ...action.payload.common_errors_list
    }
  }

  if(action.type === 'UPDATE_UNHANDLED_ERRORS_LIST'){
    state = {
      ...state,
      ...action.payload.unhandled_errors_list
    }
  }

  return state;

};///////////////////////////Public Functions END///////////////////////////////



//////////////////////////Private Functions START///////////////////////////////
const _Error = { // Private functions accessible within this modules only

  /********************************************************************
  Initial State
  *********************************************************************/
  InitialState: {
    common_errors_list : null,
    unhandled_errors_list : null
  }

};//////////////////////////Private Functions END///////////////////////////////
