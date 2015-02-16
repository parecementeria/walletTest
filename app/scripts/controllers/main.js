'use strict';

angular.module('walletappApp')
  .controller('MainCtrl', function ($scope, $window) {
    $scope.currencies = [{name:'gbp', value:1.3}, {name:'euro', value:3.2}, {name:'usd', value:4.2}];
    $scope.currentCurrency = $scope.currencies[0];
    $scope.amount='';
    $scope.data = {
      totalAmount:0,
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
      else {
        $window.alert('You don`t have enought money!. Please try other amount');
      }
    };
    $scope.initData = function() {
      $scope.currentCurrency = $scope.currencies[0];
      $scope.amount='';
    };
  });
