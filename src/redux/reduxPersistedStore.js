// Info: Persisted Redux Store
'use strict';

// Shared Dependencies (Managed by Loader)
var Lib;

// Redux Persisit-Store (Private scope)
import {persistStore} from 'redux-persist';

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


/////////////////////////// Module Exports START ///////////////////////////////
module.exports = function(shared_libs, config){

  // Run Loader
  loader(shared_libs, config);

  // Export Private Interfaces of this module
  return _Persistor.create();

};//////////////////////////// Module Exports END //////////////////////////////


//////////////////////////Private Functions START///////////////////////////////
const _Persistor = { // Private functions accessible within this modules only

  /********************************************************************
  Create Persisted Redux Store

  No Params

  @return {Object} Persist Store - Persisted Redux Store
  *********************************************************************/
  create: function(){

    // Return Persisted Redux Store
    return persistStore(Lib.ReduxStore);

  },

};//////////////////////////Private Functions END///////////////////////////////
