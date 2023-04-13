// Info: Modals Test
'use strict';

// React and component (Private Scope)
import React, {useState} from 'react';

// React Native Base Component (Private Scope) - None

// Shared Dependencies (Managed by Loader)
var Lib = {};

// Private Dependencies - Modals
var Test;


// Private Dependencies - Partials - None

// Icons Configuration
const ICONS = {};

// Exclusive Dependencies
var CONFIG; // (Managed by Main Entry Module & Loader)


/////////////////////////// Module-Loader START ////////////////////////////////

  /********************************************************************
  Load dependencies and configurations

  @param {Set} shared_libs - Reference to libraries already loaded in memory by other modules
  @param {Set} config - Custom configuration in key-value pairs

  @return nothing
  *********************************************************************/
  const loader = function (shared_libs, config){

    // Shared Dependencies (Managed my Main Entry Module)
    Lib = shared_libs;

    // Configuration (Managed my Main Entry Module)
    CONFIG = config;

    // Private Dependencies - Modals
    Test = require('./modal/Test')(Lib, CONFIG);

  };

//////////////////////////// Module-Loader END /////////////////////////////////


///////////////////////////// Module Exports START /////////////////////////////
module.exports = function (shared_libs, config){

  // Run Loader
  loader(shared_libs, config);

  // Inject Modals of this module directly to global Modals
  Lib.Modals.Test = _ModalsUI.renderTest;

};//////////////////////////// Module Exports END //////////////////////////////



//////////////////////////////UI Functions START////////////////////////////////
const _ModalsUI = { // UI functions accessible within this modules only



  /********************************************************************
  Render Test details Modal

  @param {Set} test - test

  @return {Jsx} - UI
  *********************************************************************/
  renderTest: function(params){

    Lib.Modal.show(
      <Test
        closeModal={() => Lib.Modal.hide()}

      />
    );

  },


};/////////////////////////////UI Functions END/////////////////////////////////
