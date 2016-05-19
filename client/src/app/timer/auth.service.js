(function() {
  'use strict';

  angular
    .module('client')
    .factory('AuthModel', AuthModel);

  function AuthModel(Restangular, AuthTokenFactory) {
    var AuthModel = {};


    // POST
    AuthModel.login = function(email, password) {
      return Restangular.all('/login').post({
        email: email,
        password: password
      }).then(handleSuccess);

    }
    // POST
    AuthModel.register = function(email, password) {
      return Restangular.all('/register').post({
        email: email,
        password: password
      }).then(handleSuccess);
    }

    // Set token to local storage
    function handleSuccess(data) {
      AuthTokenFactory.setToken(data.token);
    }

    return AuthModel;
  }

})();
