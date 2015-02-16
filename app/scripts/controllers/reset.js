'use strict';

angular.module('walletappApp')
  .controller('ResetCtrl', function (localStorageService, $location, $window) {
    if($window.confirm('Are you sure you want to reset your wallet?')) {
      localStorageService.clearAll();
    }
    $location.path('#/');
  });
