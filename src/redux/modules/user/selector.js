// Info: Contains Functions Related to User Redux state Getter
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
  return User;

};//////////////////////////// Module Exports END //////////////////////////////



////////////////////////////Public Functions START//////////////////////////////
const User = { // Public functions accessible by other modules

  /********************************************************************
  Get User Deep Data from Redux

  @param {Reference} redux_selector - Reference to Redux Selector

  @return {Set} user_deep_data - User-Deep-Data
  *********************************************************************/
  getUserDeepDataFromRedux: function(redux_selector){

    if(
      !Lib.Nus.Utils.isEmpty(redux_selector.User) &&
      !Lib.Nus.Utils.isNullOrUndefined(redux_selector.User['user_deep_data'])
    ){
      return redux_selector.User['user_deep_data'];
    }

  },


  /********************************************************************
  Get User Id from Redux

  @param {Reference} redux_selector - Reference to Redux Selector

  @return {String} user_id - User Id
  *********************************************************************/
  getUserIdFromRedux: function(redux_selector){

    if( User.getUserDeepDataFromRedux(redux_selector) ){
      return User.getUserDeepDataFromRedux(redux_selector)['user_data']['user_id'];
    }

  },


};////////////////////////////Public Functions END//////////////////////////////
