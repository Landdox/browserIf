(function() {
  'use strict';

  angular.module('browserIf', [])
    .directive('browserIf', browserIf)
    .service('matchBrowser', matchBrowser)
  ;

  browserIf.$inject = ['$animate', 'matchBrowser'];

  function browserIf($animate, matchBrowser) {
    var directive = {
      restrict: 'A',
      transclude: 'element',
      terminal: true,
      priority: 600,
      link: link
    };

    return directive;

    function link(scope, element, attrs, ctrl, transcludeFn) {
      transcludeFn(function browserIf(clone) {
        if(matchBrowser.evaluate(attrs.browserIf.toLowerCase().split(','))) {
          $animate.enter(clone, element.parent(), element);
        }
      });
    }
  }

  matchBrowser.$inject = [];

  function matchBrowser() {
    var userAgent = navigator.userAgent;
    var service = {};

    var browserName = getBrowserName(userAgent);

    service.evaluate = evaluate;

    return service;

    function evaluate(browserList) {
      browserList = browserList.map(function(browser) {
        return browser.toLowerCase();
      });

      return browserList.indexOf(browserName) !== -1;
    }

    function getBrowserName(uA) {
      var browser = uA.toLowerCase();

      if(browser.indexOf('opr') !== -1 || browser.indexOf('opera') !== -1) {
        return 'opera';
      }

      if(browser.indexOf('chrome') !== -1) {
        return 'chrome';
      }

      if(browser.indexOf('msie') !== -1 || browser.indexOf('trident') !== -1) {
        return 'ie';
      }

      if(browser.indexOf('firefox') !== -1) {
        return 'firefox';
      }

      return '';
    }
  }

})();
