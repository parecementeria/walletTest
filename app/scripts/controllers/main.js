'use strict';

angular.module('walletappApp')
  .controller('MainCtrl', function ($scope, $window, localStorageService, currencyConverter) {

    function initData() {
      if(localStorageService.keys().length === 0){
        //default scope values
        $scope.currencies = ['gbp', 'euro', 'usd'];
        $scope.currentCurrency = $scope.currencies[0];
        $scope.amount = '';
        $scope.data = {
          totalAmount:0,
          movements:[]
        };
        //setting up default local storage
        localStorageService.set('currencies', $scope.currencies);
        localStorageService.set('amount', $scope.amount);
        localStorageService.set('currentCurrency', $scope.currentCurrency);
        localStorageService.set('data', $scope.data);
      } else {
        //setting up scope variables from local storage
        $scope.currencies = localStorageService.get('currencies');
        $scope.currentCurrency = localStorageService.get('currentCurrency');
        $scope.amount = localStorageService.get('amount');
        $scope.data = localStorageService.get('data');
      }
    }
    initData();

    $scope.addAmount = function(amount) {
      $scope.data.totalAmount = $scope.data.totalAmount * 1 + amount * 1;
      $scope.amount = '';
      var movement = {type:'in', amount: amount, currency: $scope.currentCurrency, date: Date.now()};
      $scope.data.movements.unshift(movement);
      localStorageService.set('data', $scope.data);
      localStorageService.set('amount', $scope.amount);
    };

    $scope.removeAmount = function(amount){
      if($scope.data.totalAmount > amount) {
        $scope.data.totalAmount = $scope.data.totalAmount *1 - amount * 1;
        $scope.amount = '';
        var movement = {type:'out', amount: amount, currency: $scope.currentCurrency, date: Date.now()};
        $scope.data.movements.unshift(movement);
        localStorageService.set('data', $scope.data);
        localStorageService.set('amount', $scope.amount);
      }
      else {
        $window.alert('You don`t have enought money!. Please try other amount');
      }
    };

    $scope.$watch('currentCurrency', function(newValue, oldValue) {
      console.log(oldValue + ' to ' + newValue);
      var changeRate = currencyConverter.convertCurrency(newValue, oldValue);
      $scope.data.totalAmount = ($scope.data.totalAmount * changeRate);
      $scope.currentCurrency = newValue;
      localStorageService.set('currentCurrency', $scope.currentCurrency);
      localStorageService.set('data', $scope.data);
    });

  });
