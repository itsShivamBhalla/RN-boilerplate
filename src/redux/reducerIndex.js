// Info: Redux Actions from all Modules
'use strict';

// Shared Dependencies (Managed by Loader)
var Lib;

// Redux Persisit-Reducer (Private scope)
import {persistReducer} from 'redux-persist';

// Redux.Combine-Reducers (Private scope)
import {combineReducers} from 'redux';

// Exclusive Dependencies
var CONFIG; // Module Configration (Managed by Loader)


/////////////////////////// Module-Loader START ////////////////////////////////

  /********************************************************************
  Load dependencies and Configurations

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
  return _Reducers.create();

};//////////////////////////// Module Exports END //////////////////////////////


//////////////////////////Private Functions START///////////////////////////////
const _Reducers = { // Private functions accessible within this modules only

  /********************************************************************
  Combine all the reducers

  No Params

  @return {Object} Reducers - Combined Reducers (With Persistance)
  *********************************************************************/
  create: function(){

    // Config for Persist-Reducer (Only for Auth-User related Store)
    const auth_user_persist_config = {
      key: 'auth_user',
      storage: Lib.LocalStorage,
    };

    // Config for Persist-Reducer (Only for Auth-Device related Store)
    const auth_device_persist_config = {
      key: 'auth_device',
      storage: Lib.LocalStorage,
    };


    // Combining all Reducers (With/Without config)
    const combine_reducers = combineReducers({
      'Error': require('./modules/error/reducer')(Lib, CONFIG),
      'Modals': require('./modules/modals/reducer')(Lib, CONFIG),
      'Org': require('./modules/org/reducer')(Lib, CONFIG),
      'AuthUser': persistReducer(auth_user_persist_config, require('./modules/auth_user/reducer')(Lib, CONFIG)),
      'AuthDevice': persistReducer(auth_device_persist_config, require('./modules/auth_device/reducer')(Lib, CONFIG)),
      'Nav': require('./modules/nav/reducer')(Lib, CONFIG),
      'User': require('./modules/user/reducer')(Lib, CONFIG),
      'Device': require('./modules/device/reducer')(Lib, CONFIG),
      'Brand': require('./modules/brand/reducer')(Lib, CONFIG),
      'Store': require('./modules/store/reducer')(Lib, CONFIG),
      'MenuEditor': require('./modules/menu_editor/reducer')(Lib, CONFIG),
      'CrossSell': require('./modules/cross_sell/reducer')(Lib, CONFIG),
      'FullMenu': require('./modules/full_menu/reducer')(Lib, CONFIG),
      'Menu': require('./modules/menu/reducer')(Lib, CONFIG),
      'Cart': require('./modules/cart/reducer')(Lib, CONFIG),
      'EditCart': require('./modules/edit_cart/reducer')(Lib, CONFIG),
      'CardMachine': require('./modules/card_machine/reducer')(Lib, CONFIG),
      'UsersList': require('./modules/users_list/reducer')(Lib, CONFIG),
    });


    // Return Persisted Reducer
    return combine_reducers;

  },

};//////////////////////////Private Functions END///////////////////////////////
