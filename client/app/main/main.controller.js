'use strict';


angular.module('finalEnfasis3App')
  .controller('MainCtrl', function ($scope, mainService) {

    $scope.countries = [];

    $scope.init=function(){

      mainService.getPaises(callbackPaises);
    }

    var callbackPaises= function(data){

      $scope.countries= data;
    }


    $scope.redirection= function(idCode){


      location.href ='http://localhost:9000/detailPaises/'+ idCode;

      mainService.getPaises(callbackPaises);
    }

    $scope.redii= function(){


      location.href ='http://localhost:9000/creator';

      mainService.getPaises(callbackPaises);
    }
    $scope.init();


  });
