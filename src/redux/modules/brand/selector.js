// Info: Contains Functions Related to Brand Redux state Setters
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
  return Brand;

};//////////////////////////// Module Exports END //////////////////////////////



////////////////////////////Public Functions START//////////////////////////////
const Brand = { // Public functions accessible by other modules


  /********************************************************************
  Get Brand Deep Data from Redux

  @param {Reference} redux_selector - Reference to Redux Selector

  @return {Set} brand_deep_data - Brand Deep Data
  *********************************************************************/
  getBrandDeepDataFromRedux: function(redux_selector){

    if(
      !Lib.Nus.Utils.isEmpty(redux_selector.Brand) &&
      !Lib.Nus.Utils.isNullOrUndefined(redux_selector.Brand['brand_deep_data'])
    ){
      return redux_selector.Brand['brand_deep_data'];
    }

  },

  /********************************************************************
  Get Brand Deep Data from Redux

  @param {Reference} redux_selector - Reference to Redux Selector

  @return {Set} brand_deep_data - Brand Deep Data
  *********************************************************************/
  getBrandListFromRedux: function(redux_selector){

    if(
      !Lib.Nus.Utils.isEmpty(redux_selector.Brand) &&
      !Lib.Nus.Utils.isNullOrUndefined(redux_selector.Brand['brand_list'])
    ){
      return redux_selector.Brand['brand_list'];
    }

  },


  /********************************************************************
  Get Brand Deep Data from Redux

  @param {Reference} redux_selector - Reference to Redux Selector

  @return {Set} brand_deep_data - Brand Deep Data
  *********************************************************************/
  getSelectedBrandDeepDataFromRedux: function(redux_selector){

    if(Brand.getBrandListFromRedux(redux_selector)){

      let brand_id = Lib.ReduxSelector.Nav.getNavDataFromRedux(redux_selector)['selected_brand_id']

      return Brand.getBrandListFromRedux(redux_selector)[brand_id];
    }

  },


  /********************************************************************
  Get Brand Name from Redux

  @param {Reference} redux_selector - Reference to Redux Selector

  @return {String} brand_name - Brand Name
  *********************************************************************/
  getBrandNameFromRedux: function(redux_selector){

    // When brand is selected from brand list
    if( Brand.getSelectedBrandDeepDataFromRedux(redux_selector) ){
      return Brand.getSelectedBrandDeepDataFromRedux(redux_selector)['brand_data']['name'];
    }
    // When Brand deep data already updated in redux
    else if( Brand.getBrandDeepDataFromRedux(redux_selector) ){
      return Brand.getBrandDeepDataFromRedux(redux_selector)['brand_data']['name'];
    }

  },


  /********************************************************************
  Get Brand Id from Redux

  @param {Reference} redux_selector - Reference to Redux Selector

  @return {String} brand_id - Brand Id
  *********************************************************************/
  getBrandIdFromRedux: function(redux_selector){

    // When brand is selected from brand list
    if( Brand.getSelectedBrandDeepDataFromRedux(redux_selector) ){
      return Brand.getSelectedBrandDeepDataFromRedux(redux_selector)['brand_data']['brand_id'];
    }
    // When Brand deep data already updated in redux
    else if( Brand.getBrandDeepDataFromRedux(redux_selector) ){
      return Brand.getBrandDeepDataFromRedux(redux_selector)['brand_data']['brand_id'];
    }

  },


  /********************************************************************
  Get Brand Country from Redux

  @param {Reference} redux_selector - Reference to Redux Selector

  @return {String} country - Brand Country
  *********************************************************************/
  getBrandCountryFromRedux: function(redux_selector){

    // When brand is selected from brand list
    if( Brand.getSelectedBrandDeepDataFromRedux(redux_selector) ){
      return Brand.getSelectedBrandDeepDataFromRedux(redux_selector)['brand_data']['country'];
    }
    // When Brand deep data already updated in redux
    else if( Brand.getBrandDeepDataFromRedux(redux_selector) ){
      return Brand.getBrandDeepDataFromRedux(redux_selector)['brand_data']['country'];
    }

  },


  /********************************************************************
  Get Brand Country from Redux

  @param {Reference} redux_selector - Reference to Redux Selector

  @return {String} country - Brand Country
  *********************************************************************/
  getBrandIsMultiStore: function(redux_selector){

    // When brand is selected from brand list
    if( Brand.getSelectedBrandDeepDataFromRedux(redux_selector) ){
      return Brand.getSelectedBrandDeepDataFromRedux(redux_selector)['brand_data']['is_multi_store'];
    }
    // When Brand deep data already updated in redux
    else if( Brand.getBrandDeepDataFromRedux(redux_selector) ){
      return Brand.getBrandDeepDataFromRedux(redux_selector)['brand_data']['is_multi_store'];
    }

  },



};////////////////////////////Public Functions END//////////////////////////////
