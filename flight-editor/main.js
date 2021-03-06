'use strict';

require.config({
  baseUrl: './',
  paths: {
    jquery: 'bower_components/jquery/dist/jquery',
    es5shim: 'bower_components/es5-shim/es5-shim',
    es5sham: 'bower_components/es5-shim/es5-sham',
    flight: 'bower_components/flight'
  },
  shim: {
    'app': {
      deps: ['jquery', 'es5shim', 'es5sham']
    }
  }
});

require(['app'], function (App) {
  App.initialize();
});
