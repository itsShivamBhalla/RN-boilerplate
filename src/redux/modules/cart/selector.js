// Info: Contains Functions Related to Cart Redux state Getter
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
  return Cart;

};//////////////////////////// Module Exports END //////////////////////////////



////////////////////////////Public Functions START//////////////////////////////
const Cart = { // Public functions accessible by other modules

  /********************************************************************
  Return Carts-list from Redux

  @param {Reference} redux_selector - Reference to Redux Selector

  @return {Set} carts_list - Carts-list
  *********************************************************************/
  getCartsListFromRedux: function(redux_selector){

    if(
      !Lib.Nus.Utils.isEmpty(redux_selector.Cart) &&
      !Lib.Nus.Utils.isNullOrUndefined(redux_selector.Cart['carts_list'])
    ){
      return redux_selector.Cart['carts_list'];
    }

  },


  /********************************************************************
  Return Active Cart-id from Redux

  @param {Reference} redux_selector - Reference to Redux Selector

  @return {String} active_cart_id
  *********************************************************************/
  getActiveCartIdFromRedux: function(redux_selector){

    if(
      !Lib.Nus.Utils.isEmpty(redux_selector.Cart) &&
      !Lib.Nus.Utils.isNullOrUndefined(redux_selector.Cart['active_cart_id'])
    ){
      return redux_selector.Cart['active_cart_id'];
    }

  },

};////////////////////////////Public Functions END//////////////////////////////
