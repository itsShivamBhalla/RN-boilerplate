// Info: CFD Navigator
'use strict';

// React (Private Scope)
import React from 'react';

// React-Native Components (None) (Private scope)

// React Navigation Libraries (Private Scope)
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


// Shared Dependencies (Managed by Loader)
var Lib = {};


var Screens;

// Exclusive Dependencies
var CONFIG; // (Managed by Main Entry Module & Loader)


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

  // Private Dependencies
  Screens = {
    Testing: require('../modules/testing')(Lib, CONFIG),
  };

};////////////////////////// Module-Loader END ///////////////////////////////


/////////////////////////// Module Exports START ///////////////////////////////
module.exports = function(shared_libs, config){

  // Run Loader
  loader(shared_libs, config);

  // Return Public Funtions of this module
  return Navigator;

};//////////////////////////// Module Exports END //////////////////////////////



///////////////////////////Public Functions START///////////////////////////////
const Navigator = function(props){ // Public functions accessible by other modules

  // Create Stack-Navigator
  const Stack = createNativeStackNavigator();

  console.log('akdbakdb 1', NavigationContainer);
  console.log('akdbakdb asa 1', createNativeStackNavigator);

  // Create and Return Navigator
  return (
    <NavigationContainer>

      <Stack.Navigator
        //initialRouteName="SplashScreen"
        screenOptions= {{ headerShown: false }}
      >
        <Stack.Screen name="Testing" component={Screens.Testing} />
      </Stack.Navigator>

    </NavigationContainer>

  );

};//////////////////////////Public Functions END////////////////////////////////
