/**
 * Fuxion Server
 * REST API Server of Fuxion
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.FuxionServer);
  }
}(this, function(expect, FuxionServer) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new FuxionServer.AccountsApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('AccountsApi', function() {
    describe('restCreateItemApiAccountsPost', function() {
      it('should call restCreateItemApiAccountsPost successfully', function(done) {
        //uncomment below and update the code to test restCreateItemApiAccountsPost
        //instance.restCreateItemApiAccountsPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('restDeleteItemApiAccountsAccountIdDelete', function() {
      it('should call restDeleteItemApiAccountsAccountIdDelete successfully', function(done) {
        //uncomment below and update the code to test restDeleteItemApiAccountsAccountIdDelete
        //instance.restDeleteItemApiAccountsAccountIdDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('restReadItemApiAccountsAccountIdGet', function() {
      it('should call restReadItemApiAccountsAccountIdGet successfully', function(done) {
        //uncomment below and update the code to test restReadItemApiAccountsAccountIdGet
        //instance.restReadItemApiAccountsAccountIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('restReadItemsApiAccountsGet', function() {
      it('should call restReadItemsApiAccountsGet successfully', function(done) {
        //uncomment below and update the code to test restReadItemsApiAccountsGet
        //instance.restReadItemsApiAccountsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('restUpdateItemApiAccountsAccountIdPut', function() {
      it('should call restUpdateItemApiAccountsAccountIdPut successfully', function(done) {
        //uncomment below and update the code to test restUpdateItemApiAccountsAccountIdPut
        //instance.restUpdateItemApiAccountsAccountIdPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
