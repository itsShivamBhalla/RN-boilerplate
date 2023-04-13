// Info: Contains Functions Related to Modal Redux state Setters
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
  return Modal;

};//////////////////////////// Module Exports END //////////////////////////////



////////////////////////////Public Functions START//////////////////////////////
const Modal = { // Public functions accessible by other modules

  /********************************************************************
  Update Modal is-open state in Redux

  @param {Reference} redux_dispatcher - Reference to Redux Dispatcher
  @param {String} modal_key - Modal Key (is_sign_in_modal_open | is_nav_modal_open | ....)
  @param {Boolean} is_open - Modal is open or not

  No return
  *********************************************************************/
  updateModalIsOpenInRedux: function(redux_dispatcher, modal_key, is_open){

    // Update Data in Redux
    return redux_dispatcher({
      type: 'UPDATE_MODAL',
      payload: {modals:{
        [modal_key]: is_open
      }},
    });

  },

};////////////////////////////Public Functions END//////////////////////////////
