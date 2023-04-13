// Info: Reducer for Nav Module
// (To check selected module in web dashboard)
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
  return NavDataReducer;

};//////////////////////////// Module Exports END //////////////////////////////



///////////////////////////Public Functions START///////////////////////////////
const NavDataReducer = function(state = _NavData.InitialState, action){ // Public functions accessible by other modules

  // Update Nav Scope
  if(action.type === 'UPDATE_NAV_SCOPE'){
    // (Todo: Change it's name in web dashboard sidebar)
    state = {
      ...state,
      scope: action.payload,
    }
  }

  // Update Selected-Module
  if(action.type === 'UPDATE_SELECTED_MODULE'){
    state = {
      ...state,
      selected_module: action.payload,
    }
  }

  // Update Selected Org-Id
  if(action.type === 'UPDATE_ORG_ID'){
     state = {
       ...state,
       selected_org_id: action.payload,
     }
  }

  // Update Selected Brand-Id
  if(action.type === 'UPDATE_BRAND_ID'){
    state = {
      ...state,
      selected_brand_id: action.payload,
    }
  }

  // Update Selected Store-Id
  if(action.type === 'UPDATE_STORE_ID'){
     state = {
       ...state,
       selected_store_id: action.payload,
     }
  }

  // Update Selected Store-Id
  if(action.type === 'UPDATE_NAV_INDEX_COLLAPSED_STATUS'){
     state = {
       ...state,
       is_collapsed: action.payload.is_collapsed,
     }

  }

  return state;

};///////////////////////////Public Functions END///////////////////////////////



//////////////////////////Private Functions START///////////////////////////////
const _NavData = { // Private functions accessible within this modules only

  /********************************************************************
  Initial State
  *********************************************************************/
  InitialState: {
    scope: null, // Root, Org, Brand, Store (ENUM)
    selected_module: null,
    selected_org_id: null,
    selected_brand_id: null,
    selected_store_id: null,
    is_collapsed: false
  },

};//////////////////////////Private Functions END///////////////////////////////
