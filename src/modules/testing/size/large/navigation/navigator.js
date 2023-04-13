// Info: Auth Login Device Navigator
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
    Test1: require('../screens/Test1.js')(Lib, CONFIG),
    Test2: require('../screens/Test2.js')(Lib, CONFIG),
  };

};////////////////////////// Module-Loader END ///////////////////////////////


/////////////////////////// Module Exports START ///////////////////////////////
module.exports = function(shared_libs, config){

  // Run Loader
  loader(shared_libs, config);

  // Return Public Funtions of this module
  return AttendanceNavigator;

};//////////////////////////// Module Exports END //////////////////////////////



///////////////////////////Public Functions START///////////////////////////////
const AttendanceNavigator = function(props){ // Public functions accessible by other modules

  // Redux Selector
  var redux_selector = Lib.ReduxSelector.createSelector();

  // Create Stack-Navigator
  const Stack = createNativeStackNavigator();

  // Create and Return Navigator
  return (
    <NavigationContainer
      independent={true}
    >
      <Stack.Navigator
        initialRouteName="Test1"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Test1" component={Screens.Test1} />
        <Stack.Screen name="Test2" component={Screens.Test2} />
      </Stack.Navigator>
    </NavigationContainer>
  );

};//////////////////////////Public Functions END////////////////////////////////



//////////////////////////Private Functions START///////////////////////////////
const _AttendanceNavigator = { // Private functions accessible within this modules only
  // None
};//////////////////////////Private Functions END///////////////////////////////
