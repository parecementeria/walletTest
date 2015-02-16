'use strict';

angular.module('walletappApp')
  .factory('currencyConverter', function () {
    return {
      convertCurrency: function (newValue, oldValue){
        var changeRate = 1;
        if(oldValue === 'gbp') {
          if(newValue === 'euro') {changeRate = 1.35;}
          else if(newValue === 'usd') {changeRate = 1.54;}
        }
        else if( oldValue === 'euro') {
          if(newValue === 'usd') {changeRate = 1.14;}
          else if(newValue === 'gbp') {changeRate = 0.74;}
        }
        else if(oldValue === 'usd') {
          if(newValue === 'euro') {changeRate = 0.88;}
          else if(newValue === 'gbp') {changeRate = 0.65;}
        }
        return changeRate;
      }
    };
  });