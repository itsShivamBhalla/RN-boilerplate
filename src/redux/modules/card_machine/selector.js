// Info: Contains Functions Related to Card-Machines Redux state Getter
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
  return CardMachine;

};//////////////////////////// Module Exports END //////////////////////////////



////////////////////////////Public Functions START//////////////////////////////
const CardMachine = { // Public functions accessible by other modules

  /********************************************************************
  Return Card-Machines-list from Redux

  @param {Reference} redux_selector - Reference to Redux Selector

  @return {Set[]} card_machines_list - Card-Machines-list
  *********************************************************************/
  getCardMachinesListFromRedux: function(redux_selector){

    if(
      !Lib.Nus.Utils.isEmpty(redux_selector.CardMachine) &&
      !Lib.Nus.Utils.isNullOrUndefined(redux_selector.CardMachine['card_machines_list'])
    ){
      return redux_selector.CardMachine['card_machines_list'];
    }

  },

};////////////////////////////Public Functions END//////////////////////////////
