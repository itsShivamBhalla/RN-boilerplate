// Info: Colors for all Modules(Text, Border and Background colors)
'use strict';

// Shared Dependencies (Managed by Loader)
var Lib;


/////////////////////////// Module-Loader START ////////////////////////////////

  /********************************************************************
  Load dependencies and Configurations

  @param {Set} Lib - Library also used for determining various color

  @return - nothing
  *********************************************************************/
  const loader = function(shared_libs){

    // Load theme color utils
    Lib = shared_libs;

  };

//////////////////////////// Module-Loader END /////////////////////////////////



///////////////////////////// Module Exports START /////////////////////////////
module.exports = function(shared_libs){

  // Load loader
  loader(shared_libs);

  // Export Public Interfaces of this module
  return LightTheme();

};//////////////////////////// Module Exports END //////////////////////////////



///////////////////////////Public Functions START///////////////////////////////
const LightTheme = function(){ // Public functions accessible by other modules

  // Set all module colors
  const colors = {
    PRIMARY: '#7954FA',
    SECONDARY: '#6E6E6E',
    WARNING: '#FD8023',
    SUCCESS: '#02AD45',
    DANGER: '#D8313B',
    INFO: '#2680EB',
    DARK: '#212529',
    LIGHT: '#FFFFFF',

    SCRIM: '#2125296F',
    POS_BACKGROUND: '#32343A',
    CALCULATOR: '#D5DAE1',
    CALCULATOR_OPERATOR: '#1F86A2',
    TAB_SELECTED: '#5A358B',
    TAB_DESELECTED: '#41444D',
    QUICK_ATTENDANCE: '#AD9E20',
    CASH_DRAWER: '#1CAED3',
  }

  // Set all module extended colors
  const extended_colors = {

    // Primary
    PRIMARY_HOVERED: Lib.ColorUtils.determineHoverColor(colors.PRIMARY),
    PRIMARY_PRESSED: Lib.ColorUtils.determinePressedColor(colors.PRIMARY),
    PRIMARY_DISABLED: Lib.ColorUtils.determineDisabledColor(colors.PRIMARY),
    PRIMARY_PALE: Lib.ColorUtils.determinePaleColor(colors.PRIMARY),
    PRIMARY_PALE_DISABLED: Lib.ColorUtils.determinePaleDisabledColor(colors.PRIMARY),
    // Type A color (20% color + 80% #FFFFFF)
    PRIMARY_TYPE_A: Lib.ColorUtils.determineTypeAColor(colors.PRIMARY),
    // Type B color (30% color + 70% #FFFFFF)
    PRIMARY_TYPE_B: Lib.ColorUtils.determineTypeBColor(colors.PRIMARY),


    // Secondary
    SECONDARY_HOVERED: Lib.ColorUtils.determineHoverColor(colors.SECONDARY),
    SECONDARY_PRESSED: Lib.ColorUtils.determinePressedColor(colors.SECONDARY),
    SECONDARY_DISABLED: Lib.ColorUtils.determineDisabledColor(colors.SECONDARY),
    SECONDARY_PALE: Lib.ColorUtils.determinePaleColor(colors.SECONDARY),
    SECONDARY_PALE_DISABLED: Lib.ColorUtils.determinePaleDisabledColor(colors.SECONDARY),
    // Type A color (20% color + 80% #FFFFFF)
    SECONDARY_TYPE_A: Lib.ColorUtils.determineTypeAColor(colors.SECONDARY),
    // Type B color (30% color + 70% #FFFFFF)
    SECONDARY_TYPE_B: Lib.ColorUtils.determineTypeBColor(colors.SECONDARY),


    // Warning
    WARNING_HOVERED: Lib.ColorUtils.determineHoverColor(colors.WARNING),
    WARNING_PRESSED: Lib.ColorUtils.determinePressedColor(colors.WARNING),
    WARNING_DISABLED: Lib.ColorUtils.determineDisabledColor(colors.WARNING),
    WARNING_PALE: Lib.ColorUtils.determinePaleColor(colors.WARNING),
    WARNING_PALE_DISABLED: Lib.ColorUtils.determinePaleDisabledColor(colors.WARNING),
    // Type A color (20% color + 80% #FFFFFF)
    WARNING_TYPE_A: Lib.ColorUtils.determineTypeAColor(colors.WARNING),
    // Type B color (30% color + 70% #FFFFFF)
    WARNING_TYPE_B: Lib.ColorUtils.determineTypeBColor(colors.WARNING),


    // Success
    SUCCESS_HOVERED: Lib.ColorUtils.determineHoverColor(colors.SUCCESS),
    SUCCESS_PRESSED: Lib.ColorUtils.determinePressedColor(colors.SUCCESS),
    SUCCESS_DISABLED: Lib.ColorUtils.determineDisabledColor(colors.SUCCESS),
    SUCCESS_PALE: Lib.ColorUtils.determinePaleColor(colors.SUCCESS),
    SUCCESS_PALE_DISABLED: Lib.ColorUtils.determinePaleDisabledColor(colors.SUCCESS),
    // Type A color (20% color + 80% #FFFFFF)
    SUCCESS_TYPE_A: Lib.ColorUtils.determineTypeAColor(colors.SUCCESS),
    // Type B color (30% color + 70% #FFFFFF)
    SUCCESS_TYPE_B: Lib.ColorUtils.determineTypeBColor(colors.SUCCESS),


    // Danger
    DANGER_HOVERED: Lib.ColorUtils.determineHoverColor(colors.DANGER),
    DANGER_PRESSED: Lib.ColorUtils.determinePressedColor(colors.DANGER),
    DANGER_DISABLED: Lib.ColorUtils.determineDisabledColor(colors.DANGER),
    DANGER_PALE: Lib.ColorUtils.determinePaleColor(colors.DANGER),
    DANGER_PALE_DISABLED: Lib.ColorUtils.determinePaleDisabledColor(colors.DANGER),
    // Type A color (20% color + 80% #FFFFFF)
    DANGER_TYPE_A: Lib.ColorUtils.determineTypeAColor(colors.DANGER),
    // Type B color (30% color + 70% #FFFFFF)
    DANGER_TYPE_B: Lib.ColorUtils.determineTypeBColor(colors.DANGER),


    // Info
    INFO_HOVERED: Lib.ColorUtils.determineHoverColor(colors.INFO),
    INFO_PRESSED: Lib.ColorUtils.determinePressedColor(colors.INFO),
    INFO_DISABLED: Lib.ColorUtils.determineDisabledColor(colors.INFO),
    INFO_PALE: Lib.ColorUtils.determinePaleColor(colors.INFO),
    INFO_PALE_DISABLED: Lib.ColorUtils.determinePaleDisabledColor(colors.INFO),
    // Type A color (20% color + 80% #FFFFFF)
    INFO_TYPE_A: Lib.ColorUtils.determineTypeAColor(colors.INFO),
    // Type B color (30% color + 70% #FFFFFF)
    INFO_TYPE_B: Lib.ColorUtils.determineTypeBColor(colors.INFO),


    // Dark
    DARK_HOVERED: Lib.ColorUtils.determineHoverColor(colors.DARK),
    DARK_PRESSED: Lib.ColorUtils.determinePressedColor(colors.DARK),
    DARK_DISABLED: Lib.ColorUtils.determineDisabledColor(colors.DARK),
    DARK_PALE: Lib.ColorUtils.determinePaleColor(colors.DARK),
    DARK_PALE_DISABLED: Lib.ColorUtils.determinePaleDisabledColor(colors.DARK),
    // Type A color (20% color + 80% #FFFFFF)
    DARK_TYPE_A: Lib.ColorUtils.determineTypeAColor(colors.DARK),
    // Type B color (30% color + 70% #FFFFFF)
    DARK_TYPE_B: Lib.ColorUtils.determineTypeBColor(colors.DARK),


    // Light
    LIGHT_HOVERED: Lib.ColorUtils.determineHoverColor(colors.LIGHT),
    LIGHT_PRESSED: Lib.ColorUtils.determinePressedColor(colors.LIGHT),
    LIGHT_DISABLED: Lib.ColorUtils.determineDisabledColor(colors.LIGHT),
    LIGHT_PALE: Lib.ColorUtils.determinePaleColor(colors.LIGHT),
    LIGHT_PALE_DISABLED: Lib.ColorUtils.determinePaleDisabledColor(colors.LIGHT),
    // Type A color (20% color + 80% #FFFFFF)
    LIGHT_TYPE_A: Lib.ColorUtils.determineTypeAColor(colors.LIGHT),
    // Type B color (30% color + 70% #FFFFFF)
    LIGHT_TYPE_B: Lib.ColorUtils.determineTypeBColor(colors.LIGHT),


    // Pos Background
    POS_BACKGROUND_HOVERED: Lib.ColorUtils.determineHoverColor(colors.POS_BACKGROUND),
    POS_BACKGROUND_PRESSED: Lib.ColorUtils.determinePressedColor(colors.POS_BACKGROUND),
    POS_BACKGROUND_DISABLED: Lib.ColorUtils.determineDisabledColor(colors.POS_BACKGROUND),
    POS_BACKGROUND_PALE: Lib.ColorUtils.determinePaleColor(colors.POS_BACKGROUND),
    POS_BACKGROUND_PALE_DISABLED: Lib.ColorUtils.determinePaleDisabledColor(colors.POS_BACKGROUND),
    // Type A color (20% color + 80% #FFFFFF)
    POS_BACKGROUND_TYPE_A: Lib.ColorUtils.determineTypeAColor(colors.POS_BACKGROUND),
    // Type B color (30% color + 70% #FFFFFF)
    POS_BACKGROUND_TYPE_B: Lib.ColorUtils.determineTypeBColor(colors.POS_BACKGROUND),


    // Calculator Numeric Cta
    CALCULATOR_HOVERED: Lib.ColorUtils.determineHoverColor(colors.CALCULATOR),
    CALCULATOR_PRESSED: Lib.ColorUtils.determinePressedColor(colors.CALCULATOR),
    CALCULATOR_DISABLED: Lib.ColorUtils.determineDisabledColor(colors.CALCULATOR),
    CALCULATOR_PALE: Lib.ColorUtils.determinePaleColor(colors.CALCULATOR),
    CALCULATOR_PALE_DISABLED: Lib.ColorUtils.determinePaleDisabledColor(colors.CALCULATOR),
    // Type A color (20% color + 80% #FFFFFF)
    CALCULATOR_TYPE_A: Lib.ColorUtils.determineTypeAColor(colors.CALCULATOR),
    // Type B color (30% color + 70% #FFFFFF)
    CALCULATOR_TYPE_B: Lib.ColorUtils.determineTypeBColor(colors.CALCULATOR),


    // Calculator Operator Cta
    CALCULATOR_OPERATOR_HOVERED: Lib.ColorUtils.determineHoverColor(colors.CALCULATOR_OPERATOR),
    CALCULATOR_OPERATOR_PRESSED: Lib.ColorUtils.determinePressedColor(colors.CALCULATOR_OPERATOR),
    CALCULATOR_OPERATOR_DISABLED: Lib.ColorUtils.determineDisabledColor(colors.CALCULATOR_OPERATOR),
    CALCULATOR_OPERATOR_PALE: Lib.ColorUtils.determinePaleColor(colors.CALCULATOR_OPERATOR),
    CALCULATOR_OPERATOR_PALE_DISABLED: Lib.ColorUtils.determinePaleDisabledColor(colors.CALCULATOR_OPERATOR),
    // Type A color (20% color + 80% #FFFFFF)
    CALCULATOR_OPERATOR_TYPE_A: Lib.ColorUtils.determineTypeAColor(colors.CALCULATOR_OPERATOR),
    // Type B color (30% color + 70% #FFFFFF)
    CALCULATOR_OPERATOR_TYPE_B: Lib.ColorUtils.determineTypeBColor(colors.CALCULATOR_OPERATOR),


    // Quick Attendance Icon Cta
    QUICK_ATTENDANCE_HOVERED: Lib.ColorUtils.determineHoverColor(colors.QUICK_ATTENDANCE),
    QUICK_ATTENDANCE_PRESSED: Lib.ColorUtils.determinePressedColor(colors.QUICK_ATTENDANCE),
    QUICK_ATTENDANCE_DISABLED: Lib.ColorUtils.determineDisabledColor(colors.QUICK_ATTENDANCE),
    QUICK_ATTENDANCE_PALE: Lib.ColorUtils.determinePaleColor(colors.QUICK_ATTENDANCE),
    QUICK_ATTENDANCE_PALE_DISABLED: Lib.ColorUtils.determinePaleDisabledColor(colors.QUICK_ATTENDANCE),
    // Type A color (20% color + 80% #FFFFFF)
    QUICK_ATTENDANCE_TYPE_A: Lib.ColorUtils.determineTypeAColor(colors.QUICK_ATTENDANCE),
    // Type B color (30% color + 70% #FFFFFF)
    QUICK_ATTENDANCE_TYPE_B: Lib.ColorUtils.determineTypeBColor(colors.QUICK_ATTENDANCE),


    // Cash Drawer Icon Cta
    CASH_DRAWER_HOVERED: Lib.ColorUtils.determineHoverColor(colors.CASH_DRAWER),
    CASH_DRAWER_PRESSED: Lib.ColorUtils.determinePressedColor(colors.CASH_DRAWER),
    CASH_DRAWER_DISABLED: Lib.ColorUtils.determineDisabledColor(colors.CASH_DRAWER),
    CASH_DRAWER_PALE: Lib.ColorUtils.determinePaleColor(colors.CASH_DRAWER),
    CASH_DRAWER_PALE_DISABLED: Lib.ColorUtils.determinePaleDisabledColor(colors.CASH_DRAWER),
    // Type A color (20% color + 80% #FFFFFF)
    CASH_DRAWER_TYPE_A: Lib.ColorUtils.determineTypeAColor(colors.CASH_DRAWER),
    // Type B color (30% color + 70% #FFFFFF)
    CASH_DRAWER_TYPE_B: Lib.ColorUtils.determineTypeBColor(colors.CASH_DRAWER),


    // Tab Selected Cta
    TAB_SELECTED_HOVERED: Lib.ColorUtils.determineHoverColor(colors.TAB_SELECTED),
    TAB_SELECTED_PRESSED: Lib.ColorUtils.determinePressedColor(colors.TAB_SELECTED),
    TAB_SELECTED_DISABLED: Lib.ColorUtils.determineDisabledColor(colors.TAB_SELECTED),
    TAB_SELECTED_PALE: Lib.ColorUtils.determinePaleColor(colors.TAB_SELECTED),
    TAB_SELECTED_PALE_DISABLED: Lib.ColorUtils.determinePaleDisabledColor(colors.TAB_SELECTED),
    // Type A color (20% color + 80% #FFFFFF)
    TAB_SELECTED_TYPE_A: Lib.ColorUtils.determineTypeAColor(colors.TAB_SELECTED),
    // Type B color (30% color + 70% #FFFFFF)
    TAB_TYPE_B: Lib.ColorUtils.determineTypeBColor(colors.TAB),


    // Tab Selected Cta
    TAB_DESELECTED_HOVERED: Lib.ColorUtils.determineHoverColor(colors.TAB_DESELECTED),
    TAB_DESELECTED_PRESSED: Lib.ColorUtils.determinePressedColor(colors.TAB_DESELECTED),
    TAB_DESELECTED_DISABLED: Lib.ColorUtils.determineDisabledColor(colors.TAB_DESELECTED),
    TAB_DESELECTED_PALE: Lib.ColorUtils.determinePaleColor(colors.TAB_DESELECTED),
    TAB_DESELECTED_PALE_DISABLED: Lib.ColorUtils.determinePaleDisabledColor(colors.TAB_DESELECTED),
    // Type A color (20% color + 80% #FFFFFF)
    TAB_DESELECTED_TYPE_A: Lib.ColorUtils.determineTypeAColor(colors.TAB_DESELECTED),
    // Type B color (30% color + 70% #FFFFFF)
    TAB_DESELECTED_TYPE_B: Lib.ColorUtils.determineTypeBColor(colors.TAB_DESELECTED),
  }

  // Return
  return {
    ...colors,
    ...extended_colors
  };


};///////////////////////////Public Functions END///////////////////////////////
