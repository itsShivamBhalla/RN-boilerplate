import {AppRegistry, Platform} from 'react-native';

import {name as appName} from '../app.json';

// // React Native device info (Private scope)
// import DeviceInfo from 'react-native-device-info';
//
// // For error tracking (Private scope)
// import * as Sentry from "@sentry/react-native";

// Used for Drawer Navigator in Dashboard
// require('react-native-gesture-handler');

// Determine Platform/os (IOS | ANDROID)
var platform;
if(Platform.OS == 'ios'){
  platform = 'IOS';
}
if(Platform.OS == 'android'){
  platform = 'ANDROID';
}

var stage;

// Determine which environment to use
var env;
// if(__DEV__){
//   env = require('../config_dev.json');
// }else{
//   env = require('../config_prod.json');
// }

// Load Project Dependencies and Configration
const [Lib, Config] = require('./loader')(
  env, // Environment Configration
  platform, // Platform
);

// If Device is Tablet
// if( DeviceInfo.isTablet() ){
//   Config['APP_SOURCE'] = 'user_pos'; // Set App Source-type
// }


// Initialize Sentry SDK (For Bug tracking)
// var sentry_env = env['STAGE'] == 'prod' ? 'production' : 'development'; // Determine Sentry Stage/environment
// Sentry.init({
//   dsn: Config['NATIVE_SENTRY_DSN_KEY'],
//   enableNative: false,
//   environment: sentry_env
// });

// Initialize App
const Root =  require('./root')(Lib, Config);


AppRegistry.registerComponent(appName, () => Root);
