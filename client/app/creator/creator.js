'use strict';

angular.module('finalEnfasis3App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('creator', {
        url: '/creator',
        templateUrl: 'app/creator/creator.html',
        controller: 'CreatorCtrl'
      });
  });