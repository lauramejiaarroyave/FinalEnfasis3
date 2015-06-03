'use strict';

angular.module('finalEnfasis3App')
  .controller('DetailPaisesCtrl', function ($scope, detailService) {

    var idCode= location.href.split('detailPaises')[1].split('/')[1];


    $scope.init=function(){

      detailService.getPa(callbackPais, idCode);
    }

    var callbackPais= function(data){

      $scope.country= data;

      console.log(data);
    }

    $scope.init();


  });
