(function() {
  'use strict';

  angular
    .module('client')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastrConfig, RestangularProvider, $httpProvider) {

    // Enable authentication interceptor that adds JWT token to each request
    $httpProvider.interceptors.push('AuthInterceptor');

    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-right';
    toastrConfig.preventDuplicates = true;
    toastrConfig.progressBar = true;

    var API_BASE_URL = "http://localhost:3000";
    RestangularProvider.setBaseUrl(API_BASE_URL);
  }

})();
