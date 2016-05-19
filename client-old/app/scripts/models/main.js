angular.module('clientApp')
.factory('mainFactory',['$http','$q',function($http,$q){
    var o = {};
    console.log('HELLO FROM MAIN FACTORY!');

    // GET
    o.getAll = function() {
      var deferred = $q.defer();
      return $http.get('http://localhost:3000/v1/timers/',{responseType: 'json'})
        .success(function(data){
          return data
      }).error(function(){
        deferred.reject('Error getting data from server');
      });
    };
    return o;
}]);
