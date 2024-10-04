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
    instance = new FuxionServer.BodyVerifyVerifyAuthVerifyPost();
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

  describe('BodyVerifyVerifyAuthVerifyPost', function() {
    it('should create an instance of BodyVerifyVerifyAuthVerifyPost', function() {
      // uncomment below and update the code to test BodyVerifyVerifyAuthVerifyPost
      //var instance = new FuxionServer.BodyVerifyVerifyAuthVerifyPost();
      //expect(instance).to.be.a(FuxionServer.BodyVerifyVerifyAuthVerifyPost);
    });

    it('should have the property token (base name: "token")', function() {
      // uncomment below and update the code to test the property token
      //var instance = new FuxionServer.BodyVerifyVerifyAuthVerifyPost();
      //expect(instance).to.be();
    });

  });

}));
