'use strict';

describe('Service: creatorService', function () {

  // load the service's module
  beforeEach(module('finalEnfasis3App'));

  // instantiate service
  var mainService;
  beforeEach(inject(function (_creatorService_) {
    mainService = _creatorService_;
  }));

  it('should do something', function () {
    expect(!!mainService).toBe(true);
  });

});
