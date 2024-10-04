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
    instance = new FuxionServer.AccountUpdateSchema();
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

  describe('AccountUpdateSchema', function() {
    it('should create an instance of AccountUpdateSchema', function() {
      // uncomment below and update the code to test AccountUpdateSchema
      //var instance = new FuxionServer.AccountUpdateSchema();
      //expect(instance).to.be.a(FuxionServer.AccountUpdateSchema);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new FuxionServer.AccountUpdateSchema();
      //expect(instance).to.be();
    });

    it('should have the property bankName (base name: "bank_name")', function() {
      // uncomment below and update the code to test the property bankName
      //var instance = new FuxionServer.AccountUpdateSchema();
      //expect(instance).to.be();
    });

    it('should have the property accountName (base name: "account_name")', function() {
      // uncomment below and update the code to test the property accountName
      //var instance = new FuxionServer.AccountUpdateSchema();
      //expect(instance).to.be();
    });

  });

}));
