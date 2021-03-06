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
    instance = new KafkaRestProxy.ConsumerApi();
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

  describe('ConsumerApi', function() {
    describe('assignPartitions', function() {
      it('should call assignPartitions successfully', function(done) {
        //uncomment below and update the code to test assignPartitions
        //instance.assignPartitions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('commitOffsets', function() {
      it('should call commitOffsets successfully', function(done) {
        //uncomment below and update the code to test commitOffsets
        //instance.commitOffsets(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createInstanceToGroup', function() {
      it('should call createInstanceToGroup successfully', function(done) {
        //uncomment below and update the code to test createInstanceToGroup
        //instance.createInstanceToGroup(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('destroyConsumer', function() {
      it('should call destroyConsumer successfully', function(done) {
        //uncomment below and update the code to test destroyConsumer
        //instance.destroyConsumer(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('fetchData', function() {
      it('should call fetchData successfully', function(done) {
        //uncomment below and update the code to test fetchData
        //instance.fetchData(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getLastCommittedOffsetsForPartition', function() {
      it('should call getLastCommittedOffsetsForPartition successfully', function(done) {
        //uncomment below and update the code to test getLastCommittedOffsetsForPartition
        //instance.getLastCommittedOffsetsForPartition(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPartitions', function() {
      it('should call getPartitions successfully', function(done) {
        //uncomment below and update the code to test getPartitions
        //instance.getPartitions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getTopicsSubscriptions', function() {
      it('should call getTopicsSubscriptions successfully', function(done) {
        //uncomment below and update the code to test getTopicsSubscriptions
        //instance.getTopicsSubscriptions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('seekToFirstOffsetOfPartitions', function() {
      it('should call seekToFirstOffsetOfPartitions successfully', function(done) {
        //uncomment below and update the code to test seekToFirstOffsetOfPartitions
        //instance.seekToFirstOffsetOfPartitions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('seekToLastOffsetOfPartitions', function() {
      it('should call seekToLastOffsetOfPartitions successfully', function(done) {
        //uncomment below and update the code to test seekToLastOffsetOfPartitions
        //instance.seekToLastOffsetOfPartitions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('setFetchOffsets', function() {
      it('should call setFetchOffsets successfully', function(done) {
        //uncomment below and update the code to test setFetchOffsets
        //instance.setFetchOffsets(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('subscribesTopics', function() {
      it('should call subscribesTopics successfully', function(done) {
        //uncomment below and update the code to test subscribesTopics
        //instance.subscribesTopics(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('unsubscribe', function() {
      it('should call unsubscribe successfully', function(done) {
        //uncomment below and update the code to test unsubscribe
        //instance.unsubscribe(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
