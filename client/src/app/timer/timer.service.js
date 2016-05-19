(function() {
  'use strict';

  angular
    .module('client')
    .factory('TimerModel', TimerModel);

  function TimerModel(Restangular) {
    var TimerModel = {};
    var API_URL = '/v1/timers'
    // GET all
    TimerModel.getAll = function() {
      return Restangular.all(API_URL).getList();
    }
    // GET
    TimerModel.get = function(id) {
      return Restangular.one(API_URL, id).get();
    }
    // POST
    TimerModel.add = function(data) {
      return Restangular.all(API_URL).post(data);
    }
    // PUT/PATCH
    TimerModel.update = function(id, data) {
      return Restangular.one(API_URL,id).put(data);
    }
    // DELETE
    TimerModel.remove = function(id) {
      return Restangular.one(API_URL, id).remove();
    }

    return TimerModel;
  }

})();
