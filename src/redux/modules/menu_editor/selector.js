// Info: Contains Functions Related to Menu-Editor Redux state Getters
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

@return {Set} - Functions to get Redux Data
*********************************************************************/
module.exports = function(shared_libs, config){

  // Shared Dependencies (Managed my Main Entry Module)
  Lib = shared_libs;

  // Configuration (Managed my Main Entry Module)
  CONFIG = config;

  // Return Public Funtions of this module
  return MenuEditor;

};//////////////////////////// Module Exports END //////////////////////////////



////////////////////////////Public Functions START//////////////////////////////
const MenuEditor = { // Public functions accessible by other modules

  /********************************************************************
  Get Menu-Data from Redux

  @param {Reference} redux_selector - Reference to Redux Selector

  @return {Set} menu_data - Menu-Data
  *********************************************************************/
  getMenuDataFromRedux: function(redux_selector){

    if(
      !Lib.Nus.Utils.isEmpty(_MenuEditor.getMenuEditorDataFromRedux(redux_selector)) &&
      !Lib.Nus.Utils.isNullOrUndefined(_MenuEditor.getMenuEditorDataFromRedux(redux_selector)['menu_data'])
    ){
      return _MenuEditor.getMenuEditorDataFromRedux(redux_selector)['menu_data'];
    }

  },


  /********************************************************************
  Get Collections-deep-data from Redux

  @param {Reference} redux_selector - Reference to Redux Selector

  @return {Set} collections_deep_data - Collections-deep-data
  *********************************************************************/
  getCollectionsListFromRedux: function(redux_selector){

    if(
      !Lib.Nus.Utils.isEmpty(_MenuEditor.getMenuEditorDataFromRedux(redux_selector)) &&
      !Lib.Nus.Utils.isNullOrUndefined(_MenuEditor.getMenuEditorDataFromRedux(redux_selector)['collections_deep_data'])
    ){
      return _MenuEditor.getMenuEditorDataFromRedux(redux_selector)['collections_deep_data'];
    }

  },


  /********************************************************************
  Get Menu-items-deep-data from Redux

  @param {Reference} redux_dispatcher - Reference to Redux Dispatcher

  @return {Set} menu_items_deep_data - Menu-items-deep-data
  *********************************************************************/
  getMenuItemsListFromRedux: function(redux_selector){

    if(
      !Lib.Nus.Utils.isEmpty(_MenuEditor.getMenuEditorDataFromRedux(redux_selector)) &&
      !Lib.Nus.Utils.isNullOrUndefined(_MenuEditor.getMenuEditorDataFromRedux(redux_selector)['menu_items_deep_data'])
    ){
      return _MenuEditor.getMenuEditorDataFromRedux(redux_selector)['menu_items_deep_data'];
    }

  },


  /********************************************************************
  Variations-deep-data Dispached in Redux

  @param {Reference} redux_dispatcher - Reference to Redux Dispatcher

  @return {Set} variations_deep_data - Variations-deep-data
  *********************************************************************/
  getVariationsListFromRedux: function(redux_selector){

    if(
      !Lib.Nus.Utils.isEmpty(_MenuEditor.getMenuEditorDataFromRedux(redux_selector)) &&
      !Lib.Nus.Utils.isNullOrUndefined(_MenuEditor.getMenuEditorDataFromRedux(redux_selector)['variations_deep_data'])
    ){
      return _MenuEditor.getMenuEditorDataFromRedux(redux_selector)['variations_deep_data'];
    }

  },


  /********************************************************************
  Options-deep-data Dispached in Redux

  @param {Reference} redux_dispatcher - Reference to Redux Dispatcher

  @return {Set} options_deep_data - Options-deep-data
  *********************************************************************/
  getOptionsListFromRedux: function(redux_selector){

    if(
      !Lib.Nus.Utils.isEmpty(_MenuEditor.getMenuEditorDataFromRedux(redux_selector)) &&
      !Lib.Nus.Utils.isNullOrUndefined(_MenuEditor.getMenuEditorDataFromRedux(redux_selector)['options_deep_data'])
    ){
      return _MenuEditor.getMenuEditorDataFromRedux(redux_selector)['options_deep_data'];
    }

  },


  /********************************************************************
  Partitions-deep-data Dispached in Redux

  @param {Reference} redux_dispatcher - Reference to Redux Dispatcher

  @return {Set} partitions_deep_data - Partitions-deep-data
  *********************************************************************/
  getPartitionsListFromRedux: function(redux_selector){

    if(
      !Lib.Nus.Utils.isEmpty(_MenuEditor.getMenuEditorDataFromRedux(redux_selector)) &&
      !Lib.Nus.Utils.isNullOrUndefined(_MenuEditor.getMenuEditorDataFromRedux(redux_selector)['partitions_deep_data'])
    ){
      return _MenuEditor.getMenuEditorDataFromRedux(redux_selector)['partitions_deep_data'];
    }

  },

};////////////////////////////Public Functions END//////////////////////////////



//////////////////////////Private Functions START///////////////////////////////
const _MenuEditor = { // Private functions accessible within this modules only

  /********************************************************************
  Get Menu-Editor data from Redux

  @param {Reference} redux_selector - Reference to Redux Selector

  @return {Set} Menu-Editor data
  *********************************************************************/
  getMenuEditorDataFromRedux: function(redux_selector){
    return redux_selector.MenuEditor;
  },

}; //////////////////////////Private Functions END///////////////////////////////
