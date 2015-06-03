'use strict';

angular.module('finalEnfasis3App')
  .service('detailService', function ($http) {

    var idCode= location.href.split('detailPaises')[1].split('/')[1];
    var self = this;
    var data;


    self.getPaises = function (callback){

      $http.get('https://restcountries.eu/rest/v1/alpha/'+ idCode).
        success(function(data, status, headers, config) {

          callback(data);


        }).
        error(function(data, status, headers, config) {
          console.log('Error :(');
        });

    };


  });
