'use strict';

angular.module('walletappApp')
  .directive('diHistory', function () {
    return {
      restrict:'E',
      templateUrl:'../../views/partials/history-tpl.html'
    };
  });
