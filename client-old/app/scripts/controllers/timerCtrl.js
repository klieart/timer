'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:TimerCtrl
 * @description
 * # TimerCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('TimerCtrl', [
  '$scope',
  'timers',
  'timer',
  function($scope, timers, timer){
    $scope.timer = timer;
    $scope.addComment = function(){
      if($scope.body === '') { return; }
      timers.addComment(timer.id, {
        name: 'Foo Bar',
        timer: '555555',
      }).success(function(comment) {
        $scope.timer.comments.push(comment);
      });
      $scope.body = '';
      $scope.incrementUpvotes = function(comment){
        timers.upvoteComment(timer, comment);
      };
    };
}]);
