'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('MainCtrl', [
  '$scope',
  'mainFactory',
  function($scope, mainFactory){

    //$scope.timers = timers.timers;
    // $scope.addPost = function(){
    //   if(!$scope.title || $scope.title === '') { return; }
    //   timers.create({
    //     title: $scope.title,
    //     link: $scope.link,
    //   });
    //   $scope.title = '';
    //   $scope.link = '';
    // };
    $scope.data = mainFactory.getAll();
    console.log($scope.data);

    console.log('HELLO FROM MAIN CONTROLLER!');
}]);
