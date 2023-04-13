// Info: Redux Store (Non-persisted)
'use strict';

// Shared Dependencies (Managed by Loader)
var Lib;

// Redux Create-Store (Private scope)
import {createStore} from 'redux';

// Exclusive Dependencies
var CONFIG; // Module Configration (Managed by Loader)


/////////////////////////// Module-Loader START ////////////////////////////////

  /********************************************************************
  Load dependencies and configurations

  @param {Set} shared_libs - Reference to libraries already loaded in memory by other modules
  @param {Set} config - Custom configuration in key-value pairs

  @return nothing
  *********************************************************************/
  const loader = function(shared_libs, config){

    // Shared Dependencies (Managed my Main Entry Module)
    Lib = shared_libs;

    // Configuration (Managed my Main Entry Module)
    CONFIG = config;

  };

//////////////////////////// Module-Loader END /////////////////////////////////


/////////////////////////// Module Exports START /////////////////////////////
module.exports = function(shared_libs, config){

  // Run Loader
  loader(shared_libs, config);

  // Export Private Interfaces of this module
  return _Store.create();

};//////////////////////////// Module Exports END //////////////////////////////


//////////////////////////Private Functions START///////////////////////////////
const _Store = { // Private functions accessible within this modules only

  /********************************************************************
  Create Redux Store

  No Params

  @return {Object} createStore - Redux Store (Non-persisted)
  *********************************************************************/
  create: function(){

    // Return Non-Persisted Redux Store
    return createStore(
      require('./reducerIndex')(Lib, CONFIG),
    );

  },

};//////////////////////////Private Functions END///////////////////////////////
