'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
  .module('clientApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ui.router',
    'ngSanitize',
    'ngTouch',
  ])
  .config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: '../views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main',
        // resolve: {
        //   timer: ['$stateParams', 'timers', function($stateParams, timers) {
        //     return timers.get($stateParams.id);
        //   }]
        // }
      })

    $urlRouterProvider.otherwise('home');
  }]);
