// Info: Contains Functions Related to Device Redux state Getter
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
  return Device;

};//////////////////////////// Module Exports END //////////////////////////////



////////////////////////////Public Functions START//////////////////////////////
const Device = { // Public functions accessible by other modules

  /********************************************************************
  Get Device Deep Data from Redux

  @param {Reference} redux_selector - Reference to Redux Selector

  @return {Set} device_deep_data - Device Deep Data
  *********************************************************************/
  getDeviceDeepDataFromRedux: function(redux_selector){

    if(
      !Lib.Nus.Utils.isEmpty(redux_selector.Device) &&
      !Lib.Nus.Utils.isNullOrUndefined(redux_selector.Device['device_deep_data'])
    ){
      return redux_selector.Device['device_deep_data'];
    }

  },


  /********************************************************************
  Get Device Id from Redux

  @param {Reference} redux_selector - Reference to Redux Selector

  @return {String} device_id - Device Id
  *********************************************************************/
  getDeviceIdFromRedux: function(redux_selector){

    if( Device.getDeviceDeepDataFromRedux(redux_selector) ){
      return Device.getDeviceDeepDataFromRedux(redux_selector)['device_data']['device_id'];
    }

  },


  /********************************************************************
  Get Device name from Redux

  @param {Reference} redux_selector - Reference to Redux Selector

  @return {String} name - Device name
  *********************************************************************/
  getDeviceNameFromRedux: function(redux_selector){

    if( Device.getDeviceDeepDataFromRedux(redux_selector) ){
      return Device.getDeviceDeepDataFromRedux(redux_selector)['device_data']['name'];
    }

  },


  /********************************************************************
  Get Station-Id for CFD from Redux
  Station-Id is Device-Id in which POS is being used

  @param {Reference} redux_selector - Reference to Redux Selector

  @return {String} station_id - Station Id
  *********************************************************************/
  getStationIdForCfdFromRedux: function(redux_selector){

    if( Device.getDeviceDeepDataFromRedux(redux_selector) ){
      return Device.getDeviceDeepDataFromRedux(redux_selector)['device_data']['station_id'];
    }

  },

};////////////////////////////Public Functions END//////////////////////////////
