(function() {
  'use strict';

  angular
    .module('client')
    .controller('MainController', MainController);

  function MainController(TimerModel) {
    var vm = this;

    TimerModel.getAll().then(
      function success(timers){
        vm.timers = timers;
      },
      function error(){
        // Do something...
      }
    );

    TimerModel.get(1).then(function(timer){
      vm.timer = timer;
    });

    TimerModel.add({name:'test'}).then(function(timer){
      vm.timer = timer;
    });

    TimerModel.update({name:'test'}).then(function(timer){
      vm.timer = timer;
    });

    TimerModel.remove({name:'test'}).then(function(timer){
      vm.timer = timer;
    });

  }
})();
