(function() {
  'use strict';

  angular
    .module('client')
    .controller('AuthController', AuthController);

  function AuthController(AuthModel) {
    var vm = this;
    vm.login = function(email, password) {
      AuthModel.login(email, password).then(handleSuccess, handleError);
    }
    vm.register = function(email, password) {
      AuthModel.register(email, password).then(handleSuccess, handleError);
    }

    function handleSuccess(data){
      vm.data = data;
    }

    function handleError(data){
      vm.data = 'Error.';
    }

  }
})();
