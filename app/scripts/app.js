'use strict';

/**
 * @ngdoc overview
 * @name walletappApp
 * @description
 * # walletappApp
 *
 * Main module of the application.
 */
angular
  .module('walletappApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngStorage'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
