// Info: Redux Selector (Getter) Index
'use strict';

// Import Redux State (Private scope)
import {useSelector} from 'react-redux';

//////////////////////////// Module Exports START /////////////////////////////

/********************************************************************
Load Redux modules

@param {Set} shared_libs - Reference to libraries already loaded in memory by other modules
@param {Set} config - Custom configuration in key-value pairs

@return {Set} - Modules of Redux Data
*********************************************************************/
module.exports = function(shared_libs, config){

  // Export Public Interfaces of this module
  return {
    'createSelector': _Selector.createSelector,
    'Error': require('./modules/error/selector')(shared_libs, config),
    'Modals': require('./modules/modals/selector')(shared_libs, config),
    'Nav': require('./modules/nav/selector')(shared_libs, config),
    'Org': require('./modules/org/selector')(shared_libs, config),
    'AuthUser': require('./modules/auth_user/selector')(shared_libs, config),
    'AuthDevice': require('./modules/auth_device/selector')(shared_libs, config),
    'User': require('./modules/user/selector')(shared_libs, config),
    'Device': require('./modules/device/selector')(shared_libs, config),
    'Store': require('./modules/store/selector')(shared_libs, config),
    'Brand': require('./modules/brand/selector')(shared_libs, config),
    'MenuEditor': require('./modules/menu_editor/selector')(shared_libs, config),
    'CrossSell': require('./modules/cross_sell/selector')(shared_libs, config),
    'FullMenu': require('./modules/full_menu/selector')(shared_libs, config),
    'Menu': require('./modules/menu/selector')(shared_libs, config),
    'Cart': require('./modules/cart/selector')(shared_libs, config),
    'EditCart': require('./modules/edit_cart/selector')(shared_libs, config),
    'CardMachine': require('./modules/card_machine/selector')(shared_libs, config),
    'UsersList': require('./modules/users_list/selector')(shared_libs, config),
  };

};//////////////////////////// Module Exports END //////////////////////////////



//////////////////////////Private Functions START///////////////////////////////
const _Selector = { // Private functions accessible within this modules only

  /********************************************************************
  Initialize
  *********************************************************************/
  createSelector: function(){

    return useSelector(state => { // Redux selector initialise to get Redux data
      return state
    });

  },

};//////////////////////////Private Functions END///////////////////////////////
