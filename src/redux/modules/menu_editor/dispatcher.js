// Info: Contains Functions Related to Menu-Editor Redux state Setters
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
  return DispatchMenuEditor;

};//////////////////////////// Module Exports END //////////////////////////////



////////////////////////////Public Functions START//////////////////////////////
const DispatchMenuEditor = { // Public functions accessible by other modules

  /********************************************************************
  Menu-data Dispached in Redux

  @param {Reference} redux_dispatcher - Reference to Redux Dispatcher
  @param {Set} menu_data - Menu-data

  No return
  *********************************************************************/
  updateMenuDataInRedux: function(redux_dispatcher, menu_data){

    // Update Menu-data in Redux
    return redux_dispatcher({
      type: 'UPDATE_MENU_DATA',
      payload: menu_data
    });

  },


  /********************************************************************
  Collections-deep-data Dispached in Redux

  @param {Reference} redux_dispatcher - Reference to Redux Dispatcher
  @param {Set} collections_deep_data - Collections-deep-data

  No return
  *********************************************************************/
  updateCollectionsListInRedux: function(redux_dispatcher, collections_deep_data){

    // Update Collection-list in Redux
    return redux_dispatcher({
      type: 'UPDATE_COLLECTIONS_LIST',
      payload: collections_deep_data
    });

  },


  /********************************************************************
  Menu-items-deep-data Dispached in Redux

  @param {Reference} redux_dispatcher - Reference to Redux Dispatcher
  @param {Set} menu_items_deep_data - Menu-items-deep-data

  No return
  *********************************************************************/
  updateMenuItemsListInRedux: function(redux_dispatcher, menu_items_deep_data){

    // Update Menu-item list in Redux
    return redux_dispatcher({
      type: 'UPDATE_MENU_ITEMS_LIST',
      payload: menu_items_deep_data
    });

  },


  /********************************************************************
  Variations-deep-data Dispached in Redux

  @param {Reference} redux_dispatcher - Reference to Redux Dispatcher
  @param {Set} variations_deep_data - Variations-deep-data

  No return
  *********************************************************************/
  updateVariationsListInRedux: function(redux_dispatcher, variations_deep_data){

    // Update Variation-list in Redux
    return redux_dispatcher({
      type: 'UPDATE_VARIATIONS_LIST',
      payload: variations_deep_data
    });

  },


  /********************************************************************
  Options-deep-data Dispached in Redux

  @param {Reference} redux_dispatcher - Reference to Redux Dispatcher
  @param {Set} options_deep_data - Options-deep-data

  No return
  *********************************************************************/
  updateOptionsListInRedux: function(redux_dispatcher, options_deep_data){

    // Update Option-list in Redux
    return redux_dispatcher({
      type: 'UPDATE_OPTIONS_LIST',
      payload: options_deep_data
    });

  },


  /********************************************************************
  Partitions-deep-data Dispached in Redux

  @param {Reference} redux_dispatcher - Reference to Redux Dispatcher
  @param {Set} partitions_deep_data - Partitions-deep-data

  No return
  *********************************************************************/
  updatePartitionsListInRedux: function(redux_dispatcher, partitions_deep_data){

    // Update Partition-list in Redux
    return redux_dispatcher({
      type: 'UPDATE_PARTITIONS_LIST',
      payload: partitions_deep_data
    });

  },

};////////////////////////////Public Functions END//////////////////////////////
