// Info: Contains Functions Related to Modal Redux state Getter
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
  return Modal;

};//////////////////////////// Module Exports END //////////////////////////////



////////////////////////////Public Functions START//////////////////////////////
const Modal = { // Public functions accessible by other modules

  /********************************************************************
  Get Modal data to open modal

  @param {Reference} redux_selector - Reference to Redux Selector
  @param {String} modal_key - Modal Key (is_sign_in_modal_open | is_nav_modal_open | ....)

  @return {Boolean} If true, open Modal
  *********************************************************************/
  getModalIsOpenFromRedux: function(redux_selector, modal_key){
    return Boolean(redux_selector.Modals[modal_key]);
  },


};////////////////////////////Public Functions END//////////////////////////////
