/**
 * Kafka REST proxy
 * Confluent Kafka REST proxy
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.KafkaRestProxy);
  }
}(this, function(expect, KafkaRestProxy) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new KafkaRestProxy.PartitionInTopic();
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

  describe('PartitionInTopic', function() {
    it('should create an instance of PartitionInTopic', function() {
      // uncomment below and update the code to test PartitionInTopic
      //var instane = new KafkaRestProxy.PartitionInTopic();
      //expect(instance).to.be.a(KafkaRestProxy.PartitionInTopic);
    });

    it('should have the property topic (base name: "topic")', function() {
      // uncomment below and update the code to test the property topic
      //var instane = new KafkaRestProxy.PartitionInTopic();
      //expect(instance).to.be();
    });

    it('should have the property partition (base name: "partition")', function() {
      // uncomment below and update the code to test the property partition
      //var instane = new KafkaRestProxy.PartitionInTopic();
      //expect(instance).to.be();
    });

  });

}));
