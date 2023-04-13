// Info: Contains Functions Related to Nav-Data Redux state Setters
// (To check selected module in web dashboard)
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
  return NavData;

};//////////////////////////// Module Exports END //////////////////////////////



////////////////////////////Public Functions START//////////////////////////////
const NavData = { // Public functions accessible by other modules

  /********************************************************************
  Nav-data Dispached in Redux

  @param {Reference} redux_dispatcher - Reference to Redux Dispatcher
  @param {Set} nav_data - Nav-Data

  No return
  *********************************************************************/
  updateNavDataInRedux: function(redux_dispatcher, nav_data){

    NavData.updateScopeInRedux(redux_dispatcher, nav_data['scope']);
    NavData.updateSelectedModuleInRedux(redux_dispatcher, nav_data['selected_module']);
    NavData.updateSelectedOrgIdInRedux(redux_dispatcher, nav_data['selected_org_id']);
    NavData.updateSelectedBrandIdInRedux(redux_dispatcher, nav_data['selected_brand_id']);
    NavData.updateSelectedStoreIdInRedux(redux_dispatcher, nav_data['selected_store_id']);

  },


  /********************************************************************
  Nav Scope Dispached in Redux

  @param {Reference} redux_dispatcher - Reference to Redux Dispatcher
  @param {Enum} scope - Nav Scope (Root, Org, Brand, Store)

  No return
  *********************************************************************/
  updateScopeInRedux: function(redux_dispatcher, scope){

    if(scope != null){
      // Update Data in Redux
      return redux_dispatcher({
        type: 'UPDATE_NAV_SCOPE',
        payload: scope,
      });
    }


  },


  /********************************************************************
  Nav Selected-Module Dispached in Redux

  @param {Reference} redux_dispatcher - Reference to Redux Dispatcher
  @param {String} selected_module - Module selected in Web dashboard Sidebar

  No return
  *********************************************************************/
  updateSelectedModuleInRedux: function(redux_dispatcher, selected_module){

    if(selected_module != null){
    // Update Data in Redux
    return redux_dispatcher({
      type: 'UPDATE_SELECTED_MODULE',
      payload: selected_module,
    });
  }
  },


  /********************************************************************
  Nav Selected Org-Id Dispached in Redux

  @param {Reference} redux_dispatcher - Reference to Redux Dispatcher
  @param {String} selected_org_id - Selected Org-Id

  No return
  *********************************************************************/
  updateSelectedOrgIdInRedux: function(redux_dispatcher, selected_org_id){

    if(selected_org_id != null){
    // Update Data in Redux
    return redux_dispatcher({
      type: 'UPDATE_ORG_ID',
      payload: selected_org_id,
    });
  }
  },


  /********************************************************************
  Nav Selected Brand-Id Dispached in Redux

  @param {Reference} redux_dispatcher - Reference to Redux Dispatcher
  @param {String} selected_brand_id - Selected Brand-Id

  No return
  *********************************************************************/
  updateSelectedBrandIdInRedux: function(redux_dispatcher, selected_brand_id){

    if(selected_brand_id != null){
    // Update Data in Redux
    return redux_dispatcher({
      type: 'UPDATE_BRAND_ID',
      payload: selected_brand_id,
    });
}
  },


  /********************************************************************
  Nav Selected Store-Id Dispached in Redux

  @param {Reference} redux_dispatcher - Reference to Redux Dispatcher
  @param {String} selected_store_id - Selected Store-Id

  No return
  *********************************************************************/
  updateSelectedStoreIdInRedux: function(redux_dispatcher, selected_store_id){
    if(selected_store_id != null){

    // Update Data in Redux
    return redux_dispatcher({
      type: 'UPDATE_STORE_ID',
      payload: selected_store_id,
    });
}
  },


  /********************************************************************
  Nav Index Collapsed Status

  @param {Reference} redux_dispatcher - Reference to Redux Dispatcher
  @param {Boolean} is_collapsed - status

  No return
  *********************************************************************/
  updateNavIndexCollapsedStatus: function(redux_dispatcher, is_collapsed){

    // Update Data in Redux
    return redux_dispatcher({
      type: 'UPDATE_NAV_INDEX_COLLAPSED_STATUS',
      payload: {is_collapsed:is_collapsed},
    });

  },

};////////////////////////////Public Functions END//////////////////////////////
