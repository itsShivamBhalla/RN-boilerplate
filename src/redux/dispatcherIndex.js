// Info: Redux Dispatcher (Setter) Index
'use strict';

// Import Redux State (Private scope)
import {useDispatch} from 'react-redux';

//////////////////////////// Module Exports START /////////////////////////////

/********************************************************************
Load Redux modules

@param {Set} shared_libs - Reference to libraries already loaded in memory by other modules
@param {Set} config - Custom configuration in key-value pairs

@return {Set} - Modules of Redux dispatcher
*********************************************************************/
module.exports = function(shared_libs, config){

  // Export Public Interfaces of this module
  return {
    'createDispatcher': _Dispatcher.createDispatcher,
    'Error': require('./modules/error/dispatcher')(shared_libs, config),
    'Modals' : require('./modules/modals/dispatcher')(shared_libs, config),
    'Nav': require('./modules/nav/dispatcher')(shared_libs, config),
    'Org': require('./modules/org/dispatcher')(shared_libs, config),
    'AuthUser': require('./modules/auth_user/dispatcher')(shared_libs, config),
    'AuthDevice': require('./modules/auth_device/dispatcher')(shared_libs, config),
    'User': require('./modules/user/dispatcher')(shared_libs, config),
    'Device': require('./modules/device/dispatcher')(shared_libs, config),
    'Store': require('./modules/store/dispatcher')(shared_libs, config),
    'Brand': require('./modules/brand/dispatcher')(shared_libs, config),
    'MenuEditor': require('./modules/menu_editor/dispatcher')(shared_libs, config),
    'CrossSell': require('./modules/cross_sell/dispatcher')(shared_libs, config), // Todo: CrossSellItems changed to CrossSell
    'FullMenu': require('./modules/full_menu/dispatcher')(shared_libs, config),
    'Menu': require('./modules/menu/dispatcher')(shared_libs, config),
    'Cart': require('./modules/cart/dispatcher')(shared_libs, config),
    'EditCart': require('./modules/edit_cart/dispatcher')(shared_libs, config),
    'CardMachine': require('./modules/card_machine/dispatcher')(shared_libs, config),
    'UsersList': require('./modules/users_list/dispatcher')(shared_libs, config),
  };

};//////////////////////////// Module Exports END //////////////////////////////



//////////////////////////Private Functions START///////////////////////////////
const _Dispatcher = { // Private functions accessible within this modules only

  /********************************************************************
  Initialize
  *********************************************************************/
  createDispatcher: function(){

    // Redux dispatch initialise to send data in Redux
    return useDispatch();

  },

};//////////////////////////Private Functions END///////////////////////////////
