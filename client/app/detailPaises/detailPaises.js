'use strict';

angular.module('finalEnfasis3App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('detailPaises', {
        url: '/detailPaises/{code}',
        templateUrl: 'app/detailPaises/detailPaises.html',
        controller: 'DetailPaisesCtrl'
      });
  });
