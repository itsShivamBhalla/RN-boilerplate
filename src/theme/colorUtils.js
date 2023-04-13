// Info: TinyColor2 library. Contains theme utility functions.
'use strict';

// Import Tiny Color Library
var tinycolor = require("tinycolor2");


///////////////////////////// Module Exports START /////////////////////////////
module.exports = function(){

  // Export Public Interfaces of this module
  return ColorUtils;

};//////////////////////////// Module Exports END //////////////////////////////



///////////////////////////Public Functions START//////////////////////////////
const ColorUtils = { // Public functions accessible by other modules

  /********************************************************************
  Determine hover color

  @param {string} color - Hex code color

  @return - {string} - Color (Hex code)
  *********************************************************************/
  determineHoverColor: function(color){

    return (
      _ColorUtils.isDark(color) ?
      tinycolor.mix(color, '#FFFFFF', 10).toString() : // Lighten
      tinycolor.mix(color, '#212529', 10).toString() // Darken
    );

  },


  /********************************************************************
  Determine hover color

  @param {string} color - Hex code color

  @return - {string} - Color (Hex code)
  *********************************************************************/
  determinePressedColor: function(color){

    return (
      _ColorUtils.isDark(color) ?
      tinycolor.mix(color, '#FFFFFF', 20).toString() : // Lighten
      tinycolor.mix(color, '#212529', 20).toString() // Darken
    );

  },


  /********************************************************************
  Determine hover color

  @param {string} color - Hex code color

  @return - {string} - Color (Hex code)
  *********************************************************************/
  determineDisabledColor: function(color){

    return (
      // _ColorUtils.isDark(color) ?
      // tinycolor.mix(color, '#212529', 50) : // Darken
      tinycolor.mix(color, '#FFFFFF', 50).toString() // Lighten
    );

  },


  /********************************************************************
  Determine hover color

  @param {string} color - Hex code color

  @return - {string} - Color (Hex code)
  *********************************************************************/
  determinePaleColor: function(color){

    return (
      tinycolor.mix(color, '#FFFFFF', 90).toString() // Lighten
    );

  },


  /********************************************************************
  Determine hover color

  @param {string} color - Hex code color

  @return - {string} - Color (Hex code)
  *********************************************************************/
  determinePaleDisabledColor: function(color){

    return (
      tinycolor.mix(color, '#FFFFFF', 95).toString() // Lighten
    );

  },


  /********************************************************************
  Determine Type A Color (20% Color + 80% #FFFFFF)

  @param {string} color - Hex code color

  @return - {string} - Color (Hex code)
  *********************************************************************/
  determineTypeAColor: function(color){

    return (
      tinycolor.mix(color, '#FFFFFF', 80).toString() // Lighten
    );

  },


  /********************************************************************
  Determine Type A Color (20% Color + 80% #FFFFFF)

  @param {string} color - Hex code color

  @return - {string} - Color (Hex code)
  *********************************************************************/
  determineTypeBColor: function(color){

    return (
      tinycolor.mix(color, '#FFFFFF', 70).toString() // Lighten
    );

  },


};////////////////////////////Public Functions END//////////////////////////////



//////////////////////////Private Functions START///////////////////////////////
const _ColorUtils = {

  /********************************************************************
  Determine the color is dark or not

  @param {string} color - Hex code color

  @return {Boolean}
  *********************************************************************/
  isDark: function(color){

    return (tinycolor(color).getBrightness() < 64);

  },

};///////////////////////////Private Functions END//////////////////////////////
