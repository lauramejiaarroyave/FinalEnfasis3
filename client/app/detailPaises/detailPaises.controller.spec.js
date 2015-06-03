'use strict';

describe('Controller: DetailPaisesCtrl', function () {

  // load the controller's module
  beforeEach(module('finalEnfasis3App'));

  var DetailPaisesCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DetailPaisesCtrl = $controller('DetailPaisesCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
