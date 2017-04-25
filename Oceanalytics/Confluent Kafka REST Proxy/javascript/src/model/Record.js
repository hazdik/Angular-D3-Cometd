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
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.KafkaRestProxy) {
      root.KafkaRestProxy = {};
    }
    root.KafkaRestProxy.Record = factory(root.KafkaRestProxy.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Record model module.
   * @module model/Record
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Record</code>.
   * @alias module:model/Record
   * @class
   * @param value {String} The message value, formatted according to the embedded format
   */
  var exports = function(value) {
    var _this = this;


    _this['value'] = value;

  };

  /**
   * Constructs a <code>Record</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Record} obj Optional instance to populate.
   * @return {module:model/Record} The populated <code>Record</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('key')) {
        obj['key'] = ApiClient.convertToType(data['key'], 'String');
      }
      if (data.hasOwnProperty('value')) {
        obj['value'] = ApiClient.convertToType(data['value'], 'String');
      }
      if (data.hasOwnProperty('partition')) {
        obj['partition'] = ApiClient.convertToType(data['partition'], 'Number');
      }
    }
    return obj;
  }

  /**
   * The message key, formatted according to the embedded format, or null to omit a key (optional)
   * @member {String} key
   */
  exports.prototype['key'] = undefined;
  /**
   * The message value, formatted according to the embedded format
   * @member {String} value
   */
  exports.prototype['value'] = undefined;
  /**
   * Partition to store the message in (optional)
   * @member {Number} partition
   */
  exports.prototype['partition'] = undefined;



  return exports;
}));


