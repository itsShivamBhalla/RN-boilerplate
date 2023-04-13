// Info: Contains Functions Related to Edit-Cart Redux state Getter
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
  return EditCart;

};//////////////////////////// Module Exports END //////////////////////////////



////////////////////////////Public Functions START//////////////////////////////
const EditCart = { // Public functions accessible by other modules

  /********************************************************************
  Return Cart-deep-data from Redux

  @param {Reference} redux_selector - Reference to Redux Selector

  @return {Set} cart_deep_data - Cart-deep-data
  *********************************************************************/
  getCartDeepDataFromRedux: function(redux_selector){

    if(
      !Lib.Nus.Utils.isEmpty(redux_selector.EditCart) &&
      !Lib.Nus.Utils.isNullOrUndefined(redux_selector.EditCart['cart_deep_data'])
    ){
      return redux_selector.EditCart['cart_deep_data'];
    }

  },

};////////////////////////////Public Functions END//////////////////////////////
