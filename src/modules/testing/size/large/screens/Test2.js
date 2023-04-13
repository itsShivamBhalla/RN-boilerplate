// Info: Load data from Async-Storage
'use strict';

// React (Private Scope)
import React from 'react';

// React Native Base component (Private Scope)
import { View, Dimensions, Platform } from 'react-native';


// Shared Dependencies (Managed by Loader)
var Lib = {};


// Exclusive Dependencies
var CONFIG; // (Managed by Main Entry Module & Loader)

/////////////////////////// Module-Loader START ////////////////////////////////

/********************************************************************
  Load dependencies and configurations

  @param {Set} shared_libs - Reference to libraries already loaded in memory by other modules
  @param {Set} config - Custom configuration in key-value pairs

  @return nothing
  *********************************************************************/
  const loader = function (shared_libs, config) {

  // Shared Dependencies (Managed my Main Entry Module)
  Lib = shared_libs;

  // Configuration (Managed my Main Entry Module)
  CONFIG = config;

  // Private Dependencies (None)

};/////////////////////////// Module-Loader END ////////////////////////////////


///////////////////////////// Module Exports START /////////////////////////////
module.exports = function (shared_libs, config) {

  // Run Loader
  loader(shared_libs, config);

  // Return Public Funtions of this module
  return Test2;

};//////////////////////////// Module Exports END //////////////////////////////


///////////////////////////Public Functions START///////////////////////////////
const Test2 = function(props){


  return (
    <View>
      <TouchableOpacity
        onPress={()=>alert('wewqeqw')}
      >
        <Text>
          Press me
        </Text>
      </TouchableOpacity>
    </View>
  );

};//////////////////////////Public Functions END////////////////////////////////


//////////////////////////Private Functions START///////////////////////////////
const _Test2 = { // Private functions accessible within this modules only


};//////////////////////////Private Functions END///////////////////////////////
