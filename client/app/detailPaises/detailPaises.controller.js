'use strict';

angular.module('finalEnfasis3App')
  .controller('DetailPaisesCtrl', function ($scope, mainService) {

    var idCode= location.href.split('detailPaises')[1].split('/')[1];


    $scope.init=function(){

      mainService.getPaises(callbackPaises, idCode);
    }

    var callbackPaises= function(data){

      $scope.country= data[0];

      console.log(data);
    }

    $scope.init();


  });
