// Info: Contains Functions Related to Store Redux state Getter
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
  return Store;

};//////////////////////////// Module Exports END //////////////////////////////



////////////////////////////Public Functions START//////////////////////////////
const Store = { // Public functions accessible by other modules

  /********************************************************************
  Get Store Deep Data from Redux

  @param {Reference} redux_selector - Reference to Redux Selector

  @return {Set} store_deep_data - Store Deep Data
  *********************************************************************/
  getStoreDeepDataFromRedux: function(redux_selector){

    if(
      !Lib.Nus.Utils.isEmpty(redux_selector.Store) &&
      !Lib.Nus.Utils.isNullOrUndefined(redux_selector.Store['store_deep_data'])
    ){
      return redux_selector.Store['store_deep_data'];
    }

  },


  /********************************************************************
  Get Store Name from Redux

  @param {Reference} redux_selector - Reference to Redux Selector

  @return {String} store_name - Store Name
  *********************************************************************/
  getStoreNameFromRedux: function(redux_selector){

    if( Store.getStoreDeepDataFromRedux(redux_selector) ){
      return Store.getStoreDeepDataFromRedux(redux_selector)['store_data']['name'];
    }

  },


  /********************************************************************
  Get Store Id from Redux

  @param {Reference} redux_selector - Reference to Redux Selector

  @return {String} store_id - Store Id
  *********************************************************************/
  getStoreIdFromRedux: function(redux_selector){

    if( Store.getStoreDeepDataFromRedux(redux_selector) ){
      return Store.getStoreDeepDataFromRedux(redux_selector)['store_data']['store_id'];
    }

  },


  /********************************************************************
  Get Menu Id from Redux

  @param {Reference} redux_selector - Reference to Redux Selector

  @return {String} menu_id
  *********************************************************************/
  getMenuIdFromRedux: function(redux_selector){

    if( Store.getStoreDeepDataFromRedux(redux_selector) ){
      return Store.getStoreDeepDataFromRedux(redux_selector)['store_data']['menu_id'];
    }

  },


  /********************************************************************
  Get Store timezone from Redux

  @param {Reference} redux_selector - Reference to Redux Selector

  @return {String} timezone - Store timezone
  *********************************************************************/
  getStoreTimezoneFromRedux: function(redux_selector){

    if( Store.getStoreDeepDataFromRedux(redux_selector) ){
      return Store.getStoreDeepDataFromRedux(redux_selector)['store_data']['timezone'];
    }

  },


  /********************************************************************
  Get Store Address Data from Redux

  @param {Reference} redux_selector - Reference to Redux Selector

  @return {String} timezone - Store timezone
  *********************************************************************/
  getStoreAddressDataFromRedux: function(redux_selector){

    if(Store.getStoreDeepDataFromRedux(redux_selector)){
      return Store.getStoreDeepDataFromRedux(redux_selector)['address_data']['line1'];
    }

  },


};////////////////////////////Public Functions END//////////////////////////////
