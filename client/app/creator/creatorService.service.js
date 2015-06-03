'use strict';

angular.module('finalEnfasis3App')
  .service('creatorService', function ($http) {


    var self = this;
    var data;


    self.getInfo = function (callback){

      $http.get('http://greatsource.co/futuro/API/getAll?cedula=1010').
        success(function(data, status, headers, config) {

          callback(data);

        }).
        error(function(data, status, headers, config) {
          console.log('Error :(');
        });

    };


  });
