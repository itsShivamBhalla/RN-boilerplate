// Info: Main Entry File for Web Platforms
'use-strict'

// React (Private Scope)
import React from 'react';

// React Dom (Private Scope)
//import ReactDOM from 'react-dom';
import ReactDOM from 'react-dom/client';

// require('../web/public/css/main.css');
// require('react-native-gesture-handler');
//
var env;
var domain = window.location.hostname; // Get domain name of the web host
if(domain === 'localhost'){
  //env = require('../config_dev.json');
}else{
  //env = require('../config_prod.json');
}

// Load Project Dependencies and Configration
const [Lib, Config] = require('./loader')(
  env, // Environment Configration
  'BROWSER', // Platform
  window.location.origin
);

// Set App Source-type
Config['APP_SOURCE'] = 'user_browser';

// Initialize App
const Root =  require('./root')(Lib, Config);


// Render App as Web Component
ReactDOM.createRoot(
  document.getElementById('root')
).render(<Root/>)
