'use strict';

/**
 * @ngdoc function
 * @name clientApp.model:MainModel
 * @description
 * # MainModel
 * Model of the clientApp
 */
angular.module('clientApp')
.factory('timers', [
  '$http',
  function($http){

  var o = {
    timers: []
  };

  // GET
  o.getAll = function() {
    return $http.get('/v1/timers.json').success(function(data){
      angular.copy(data, o.timers);
    });
  };


  /*
  // POST
  o.create = function(post) {
    return $http.post('/timers.json', post).success(function(data){
      o.timers.push(data);
    });
  };
  // PATCH/PUT
  o.upvote = function(post) {
    return $http.put('/timers/' + post.id + '/upvote.json')
      .success(function(data){
        //timer.some_method = do something
      });
  };
  // DELETE
  o.get = function(id) {
    return $http.delete('/timers/' + id + '.json').then(function(res){
      o.timers.pop(data);
    });
  };
  // GET
  o.get = function(id) {
    return $http.get('/timers/' + id + '.json').then(function(res){
      return res.data;
    });
  };*/

  return o;

}]);
