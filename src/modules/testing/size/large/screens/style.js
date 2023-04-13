// Info: Screen specific Styles
'use strict';

// React native base component (Private Scope)
import {StyleSheet} from 'react-native';


//////////////////////////// Module Exports START /////////////////////////////
module.exports = function(lib){

  // Create and Export Style-Sheet
  return StyleSheet.create({

    // AttendanceHomeScreen
    attendanceHomeScreenSearchBarContainer:{
      width:370,
      alignSelf:'center'
    },

    seperator:{
      borderBottomWidth: 2,
      borderColor: lib.Color.DARK + '1A',
    },

    paginationContainer:{
      minWidth: 156
    },
    paginationNumberContainer:{
      width: 10
    },
    tableContainer:{
      borderRadius: 4, overflow: 'hidden'
    }

  });

};//////////////////////////// Module Exports END //////////////////////////////
