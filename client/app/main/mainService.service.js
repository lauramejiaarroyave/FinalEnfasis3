'use strict';

angular.module('finalEnfasis3App')
  .service('mainService', function ($http) {


    var self = this;
    var data = [];


    self.getPaises = function (callback){

      $http.get('https://restcountries.eu/rest/v1/all').
        success(function(data, status, headers, config) {

          callback(data);

        }).
        error(function(data, status, headers, config) {
          console.log('Error :(');
        });

    };


  });
