let expect = require('chai').expect
let exceptionManager = require('../lib/exceptionmanager')

describe('it', () => {

  it('should send a json', () => {
    exceptionManager.handleException(Error('Error Test'), null, null, null, null);
  });

  it('should send a json with error location ', () => {
    exceptionManager.handleException(Error('Error Test'), 'test.js', 28, null, 'serverTest.co');
  });

});
