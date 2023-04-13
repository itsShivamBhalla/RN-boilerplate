// Info: Contains Functions Related to Full-Menu Redux state Setters
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
  return DispatchFullMenu;

};//////////////////////////// Module Exports END //////////////////////////////



////////////////////////////Public Functions START//////////////////////////////
const DispatchFullMenu = { // Public functions accessible by other modules

  /********************************************************************
  Full-Menu-deep-data Dispached in Redux

  @param {Reference} redux_dispatcher - Reference to Redux Dispatcher
  @param {Set} menu_deep_data - Menu-Deep-Data

  No return
  *********************************************************************/
  updateFullMenuDataInRedux: function(redux_dispatcher, menu_deep_data){

    // Update Data in Redux
    return redux_dispatcher({
      type: 'UPDATE_FULL_MENU_DATA',
      payload: {full_menu: menu_deep_data},
    });

  },

};////////////////////////////Public Functions END//////////////////////////////
