'use strict';

angular.module('finalEnfasis3App')
  .controller('CreatorCtrl', function ($scope, creatorService) {

    $scope.info = [];

    $scope.init=function(){

     creatorService.getInfo(callbackInfo);
    }

    var callbackInfo= function(data){

      $scope.info= data;
    }

    $scope.redi= function(){


      location.href = 'http://localhost:9000/creator';

      creatorService.getInfo(callbackInfo);
    }





    $scope.init();


  });
