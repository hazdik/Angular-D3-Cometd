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
    var apiClient = new KafkaRestProxy.ApiClient();
    // apiClient.basePath = "http://11.11.254.102:8082";

    instance = new KafkaRestProxy.TopicApi(apiClient);
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

  describe('TopicApi', function() {
    describe('getTopicMetadata', function() {
      it('of __consumer_offsets should return 50 partitions', function(done) {
        //uncomment below and update the code to test getTopicMetadata
        var topicName = "__consumer_offsets";
        instance.getTopicMetadata(topicName, function(error, data) {
         if (error) throw error;
         expect(data.partitions.length).to.be(50);
         done();
        });
      });
    });
    describe('getTopics', function() {
      it('should return Topics having __consumer_offsets topic', function(done) {
        instance.getTopics(function(error, data, response) {
          if (error) {
            done(error);
            return;
          }
          expect(data).to.contain("__consumer_offsets");
          done();
        });
      });
    });
    describe('produceMessageToTopic', function() {
      it('should call produceMessageToTopic successfully', function(done) {
        var record = new KafkaRestProxy.Record();
        record.value = "Hello World";
        instance.produceMessageToTopic("test", {records: [record]}, function(error, data, response) {
         if (error) {
           done(error);
           return;
         }
         done();
        });
      });
    });
  });
}));