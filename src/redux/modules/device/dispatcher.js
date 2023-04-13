// Info: Contains Functions Related to Device Redux state Setters
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
  return DispatchDevice;

};//////////////////////////// Module Exports END //////////////////////////////



////////////////////////////Public Functions START//////////////////////////////
const DispatchDevice = { // Public functions accessible by other modules

  /********************************************************************
  Device Deep Data Dispached in Redux

  @param {Reference} redux_dispatcher - Reference to Redux Dispatcher
  @param {Set} device_deep_data - Device Deep Data

  No return
  *********************************************************************/
  updateDeviceDeepDataInRedux: function(redux_dispatcher, device_deep_data){

    // Update Data in Redux
    return redux_dispatcher({
      type: 'UPDATE_DEVICE_DEEP_DATA',
      payload: {device_deep_data: device_deep_data},
    });

  },


  /********************************************************************
  Device Deep Data Dispached in Redux

  @param {Reference} redux_dispatcher - Reference to Redux Dispatcher

  No return
  *********************************************************************/
  flushDeviceDatafromRedux: function(redux_dispatcher){

    // Remove Device Deep Data from Redux
    redux_dispatcher({
      type: 'UPDATE_DEVICE_DEEP_DATA',
      payload: {device_deep_data: null},
    });

  },


};////////////////////////////Public Functions END//////////////////////////////
