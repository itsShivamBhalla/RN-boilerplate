// Info: Contains Functions Related to Org Redux state Getter
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
  return Org;

};//////////////////////////// Module Exports END //////////////////////////////



////////////////////////////Public Functions START//////////////////////////////
const Org = { // Public functions accessible by other modules

  /********************************************************************
  Get Org Deep Data from Redux

  @param {Reference} redux_selector - Reference to Redux Selector

  @return {Set} org_deep_data - Org-Deep-Data
  *********************************************************************/
  getOrgDeepDataFromRedux: function(redux_selector){

    if(
      !Lib.Nus.Utils.isEmpty(redux_selector.Org) &&
      !Lib.Nus.Utils.isNullOrUndefined(redux_selector.Org['org_deep_data'])
    ){
      return redux_selector.Org['org_deep_data'];
    }

  },


  /********************************************************************
  Get Org Name from Redux

  @param {Reference} redux_selector - Reference to Redux Selector

  @return {String} org_name - Org Name
  *********************************************************************/
  getOrgNameFromRedux: function(redux_selector){

    if( Org.getOrgDeepDataFromRedux(redux_selector) ){
      return Org.getOrgDeepDataFromRedux(redux_selector)['org_data']['name'];
    }

  },


  /********************************************************************
  Get Org Id from Redux

  @param {Reference} redux_selector - Reference to Redux Selector

  @return {String} org_id - Org Id
  *********************************************************************/
  getOrgIdFromRedux: function(redux_selector){

    if( Org.getOrgDeepDataFromRedux(redux_selector) ){
      return Org.getOrgDeepDataFromRedux(redux_selector)['org_data']['org_id'];
    }

  },

};////////////////////////////Public Functions END//////////////////////////////
