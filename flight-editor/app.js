/*global define */
'use strict';

define([
  'news_container'
], function (NewsContainer) {
  var initialize = function () {
    console.log('app initialized');
    NewsContainer.attachTo('#news');
  };

  return {
    initialize: initialize
  };
});
