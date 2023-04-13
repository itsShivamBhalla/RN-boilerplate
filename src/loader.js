// Info: Dependency Manager. Configuration Loader
'use strict';

// Initialize
var Lib = {};
var Config = {};


//////////////////////////// Module Exports START //////////////////////////////
module.exports = function(env, platform, host){

  /* Load Configration */
  //const app_config = require('../config.js')(platform);
  const app_config = {};
  // Set Configration for this project(app)
  Config = {
    ...app_config, // static-config
    ...env // Override static-config with environment-config
  };

  // Set App Version
  if(platform === 'IOS'){ // For iOS
    Config['APP_VERSION'] = Config['APP_IOS_VERSION'];
  }
  else if(platform === 'ANDROID'){ // For Android
    Config['APP_VERSION'] = Config['APP_ANDROID_VERSION'];
  }
  else if(platform === 'BROWSER'){ // For Browser
    Config['APP_VERSION'] = Config['APP_BROWSER_VERSION'];
  }


  // Set Configration for Debug Library
  const config_debug = {
    // NO_CASUAL_LOGGING: env['NO_CASUAL_LOGGING'],
    // NO_ERROR_LOGGING: env['NO_ERROR_LOGGING'],
    // NO_TIME_AUDITING: env['NO_TIME_AUDITING']
  };

  /* Load Shared Dependencies */

  // Customer SDK
  // Browser and Native specific libraries
  // if(platform === 'BROWSER') // For Web Browser
  // {
  //   Lib.LocalStorage = require('redux-persist/lib/storage').default; // Local Storage
  //   Lib.SessionStorage = require('redux-persist/lib/storage/session').default; // Session/Auth Storage
  //   Lib.Jquery = $;
  // }
  // else // For iOS/Android
  // {
  //   Lib.LocalStorage = require('@react-native-async-storage/async-storage').default; // React Native Local Storage
  //   Lib.SessionStorage = Lib.LocalStorage; // React Native Local Storage
  // }


  // Import Color Utils
  //Lib.ColorUtils = require('./theme/colorUtils')();

  // Theme Files
  // Lib.Svgs = require('./asset/icons/svgs')();
  // Lib.Dimension = require('./theme/dimensions')();
  // Lib.Color = require('./theme/colors/light')(Lib);
  // Lib.Font = require('./asset/fonts')();
  // Lib.String = require('./asset/strings')()['en'];


  // Nopos-User SDK
  // Lib.Nus = require('pos-user-sdk')(
  //   {
  //     // Shared Libraries
  //     Jquery: Lib.Jquery
  //   },
  //   app_config
  // );
  //
  // Lib.Core = require('user-app-core')(Lib, Config);


  // // Components
  // Lib.Components = require('user-component-unified')(Lib.Color, Lib.Font, Lib.Dimension, Lib.Svgs);
  //
  // // Common style specific to screens
  // Lib.CommonStyle = require('./commonStyle')(Lib, Config);
  //
  // Lib.Modals = {}; // Todo: name needs to be updated
  //
  //
  // // Redux-Stores
  // Lib.ReduxStore = require('./redux/reduxStore')(Lib, Config); // Non-Persisted Redux Store
  // Lib.ReduxPersistedStore = require('./redux/reduxPersistedStore')(Lib, Config); // Persisted Redux Store
  //
  //
  // // Redux Selector and Dispatcher
  // Lib.ReduxSelector = require('./redux/selectorIndex')(Lib, Config);
  // Lib.ReduxDispatcher = require('./redux/dispatcherIndex')(Lib, Config);
  //
  // Lib.Toast; // Toast Hook
  // Lib.Modal; // Modal Hooks
  //
  //
  // // Core Ui functions
  // Lib.CoreUI = require('./core_ui')(Lib, Config);

  /* Return */
  return [Lib, Config];

};//////////////////////////// Module Exports END //////////////////////////////
