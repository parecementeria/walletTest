'use strict';

angular.module('walletappApp')
  .controller('MainCtrl', function ($scope) {
    $scope.currencies = ['gbp', 'euro', 'usd'];
    $scope.currentCurrency = $scope.currencies[0];
    $scope.amount='';
    $scope.data = {
      totalAmount:600,
      currentCurrency:$scope.currentCurrency,
      movements:[]
    };
    $scope.addAmount = function(amount) {
      $scope.data.totalAmount = $scope.data.totalAmount * 1 + amount * 1;
      $scope.amount = '';
      var movement = {type:'in', amount: amount, currency: $scope.currentCurrency, date: Date.now()};
      $scope.data.movements.push(movement);
    };
    $scope.removeAmount = function(amount){
      if($scope.data.totalAmount > amount) {
        $scope.data.totalAmount = $scope.data.totalAmount *1 - amount * 1;
        $scope.amount = '';
        var movement = {type:'out', amount: amount, currency: $scope.currentCurrency, date: Date.now()};
        $scope.data.movements.push(movement);
      }
    };
    $scope.reset = function() {
      $scope.currentCurrency = $scope.currencies[0];
      $scope.amount='';
    };
  });
