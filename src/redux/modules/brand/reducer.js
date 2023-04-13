// Info: Redux Actions for Brand Module (Managed by App)
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
  return BrandDataReducer;

};//////////////////////////// Module Exports END //////////////////////////////



///////////////////////////Public Functions START///////////////////////////////
const BrandDataReducer = function(state = _Brand.InitialState, action){ // Public functions accessible by other modules

  if(action.type === 'UPDATE_BRAND_LIST'){

    state = {
      ...state,
      brand_list: action.payload
    };

  }

  if(action.type === 'UPDATE_BRAND_DEEP_DATA'){

    state = {
      ...state,
      brand_deep_data: action.payload.brand_deep_data
    };

  }

  return state;

};///////////////////////////Public Functions END///////////////////////////////



//////////////////////////Private Functions START///////////////////////////////
const _Brand = { // Private functions accessible within this modules only

  /********************************************************************
  Initial State
  *********************************************************************/
  InitialState: {},

};//////////////////////////Private Functions END///////////////////////////////
