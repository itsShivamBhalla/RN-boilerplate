// Info: Contains Functions Related to Cart Redux state Setters
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
  return DispatchCart;

};//////////////////////////// Module Exports END //////////////////////////////



////////////////////////////Public Functions START//////////////////////////////
const DispatchCart = { // Public functions accessible by other modules

  /********************************************************************
  Carts-list Dispached in Redux

  @param {Reference} redux_dispatcher - Reference to Redux Dispatcher
  @param {Set} carts_list - Carts-list

  No return
  *********************************************************************/
  updateCartsListInRedux: function(redux_dispatcher, carts_list){

    // Update Data in Redux
    return redux_dispatcher({
      type: 'UPDATE_CARTS_LIST',
      payload: {carts_list: carts_list},
    });

  },


  /********************************************************************
  Active Cart-id Dispached in Redux

  @param {Reference} redux_dispatcher - Reference to Redux Dispatcher
  @param {String} active_cart_id - Active Cart-id in POS

  No return
  *********************************************************************/
  updateActiveCartIdInRedux: function(redux_dispatcher, active_cart_id){

    // Update Data in Redux
    return redux_dispatcher({
      type: 'UPDATE_ACTIVE_CART_ID',
      payload: {active_cart_id: active_cart_id},
    });

  },

};////////////////////////////Public Functions END//////////////////////////////
