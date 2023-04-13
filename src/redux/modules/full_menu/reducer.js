// Info: Redux Actions for Full-Menu Module (Managed by App)
// Todo: This can be removed later
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
  return FullMenuReducer;

};//////////////////////////// Module Exports END //////////////////////////////



///////////////////////////Public Functions START///////////////////////////////
const FullMenuReducer = function(state = _FullMenu.InitialState, action){ // Public functions accessible by other modules

  // Update Full-Menu-deep-data
  // Todo: Instead of UPDATE_STORE_MENU Action from menu_builder_landing_screen, use UPDATE_FULL_MENU_DATA
  if(action.type === 'UPDATE_FULL_MENU_DATA'){

    state = {
      ...state,
      full_menu: action.payload.full_menu
    }

  }

  return state;

};///////////////////////////Public Functions END///////////////////////////////



//////////////////////////Private Functions START///////////////////////////////
const _FullMenu = { // Private functions accessible within this modules only

  /********************************************************************
  Initial State
  *********************************************************************/
  InitialState: {
    full_menu: null,
  },

};//////////////////////////Private Functions END///////////////////////////////
