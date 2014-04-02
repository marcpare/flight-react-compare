/*global define */
'use strict';

define([
  'flight/lib/component'
], function (defineComponent) {
  function newsContainer() {
    this.after('initialize', function () {
      console.log('created the news container component');
    });
  }
  return defineComponent(newsContainer);
});
