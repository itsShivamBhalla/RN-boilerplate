// Info: Load data from Async-Storage
'use strict';

// React (Private Scope)
import React from 'react';

// React Native Base component (Private Scope)
import { View, Dimensions, Pressable, Text, TouchableOpacity } from 'react-native';

// Import react-i18next
import {useTranslation} from 'react-i18next';


import i18n from "../../../../../common/language/i18n";


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
  return Test1;

};//////////////////////////// Module Exports END //////////////////////////////


///////////////////////////Public Functions START///////////////////////////////
const Test1 = function(props){


  // const initI18n = require('../../../../../common/language/i18n')(Lib, CONFIG)

  // const initI18n = i18n;

  // console.log('props 2', initI18n);

  const {t} = useTranslation();

  // console.log('props 3', i18n.changeLanguage('hi'));

  return (
    <View style = {{flex:1, alignItems: 'center', justifyContent:'center'}}>

      <Text style={{fontSize: 32}}>
        {t("hello posist")}
      </Text>


      <View style={{flexDirection: 'row', marginTop: 30}}>
        <Pressable 
          // onPress={()=>alert('eng')}
          onPress={()=> i18n.changeLanguage('en')}
          style={{backgroundColor: 'yellow', padding: 20, borderRadius: 12, fontSize: 16, marginRight: 16}}
        >
          <Text style={{fontSize: 24}}>English</Text>
        </Pressable>
        <Pressable 
          // onPress={()=>alert('Hindi')}
          onPress={()=> i18n.changeLanguage('hi')}
          style={{backgroundColor: 'pink', padding: 20, borderRadius: 12, fontSize: 24}}
        >
          <Text style={{fontSize: 24}}>Hindi</Text>
        </Pressable>
      </View> 
    </View>
  );

};//////////////////////////Public Functions END////////////////////////////////


//////////////////////////Private Functions START///////////////////////////////
const _Test1 = { // Private functions accessible within this modules only


};//////////////////////////Private Functions END///////////////////////////////
