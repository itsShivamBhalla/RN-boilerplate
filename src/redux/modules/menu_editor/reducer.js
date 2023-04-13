// Info: Reducer for Menu-Editor Module (Has Menu-data, Collections-list Menu-Items-list, Variation-list, Options-list, Partitions-list)

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
  return MenuEditorReducer;

};//////////////////////////// Module Exports END //////////////////////////////



///////////////////////////Public Functions START///////////////////////////////
const MenuEditorReducer = function(state = _MenuEditor.InitialState, action){ // Public functions accessible by other modules

  // Update Menu-data
  if(action.type === 'UPDATE_MENU_DATA'){

    state = {
      ...state,
      menu_data: action.payload
    }

  }

  // Update Collections-list
  if(action.type === 'UPDATE_COLLECTIONS_LIST'){

    state = {
      ...state,
      collections_deep_data: action.payload
    }

  }

  // Update Menu-Items-list
  if(action.type === 'UPDATE_MENU_ITEMS_LIST'){

    state = {
      ...state,
      menu_items_deep_data: action.payload
    }

  }

  // Update Variation-list
  if(action.type === 'UPDATE_VARIATIONS_LIST'){

    state = {
      ...state,
      variations_deep_data: action.payload
    }

  }

  // Update Options-list
  if(action.type === 'UPDATE_OPTIONS_LIST'){

    state = {
      ...state,
      options_deep_data: action.payload
    }

  }

  // Update Partitions-list
  if(action.type === 'UPDATE_PARTITIONS_LIST'){

    state = {
      ...state,
      partitions_deep_data: action.payload
    }

  }

  return state;

};///////////////////////////Public Functions END///////////////////////////////



//////////////////////////Private Functions START///////////////////////////////
const _MenuEditor = { // Private functions accessible within this modules only

  /********************************************************************
  Initial State
  *********************************************************************/
  InitialState: {
    menu_data: null,
    collections_deep_data: null,
    menu_items_deep_data: null,
    variations_deep_data: null,
    options_deep_data: null,
    partitions_deep_data: null,
  },

};//////////////////////////Private Functions END///////////////////////////////
