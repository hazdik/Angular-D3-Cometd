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
 */

import * as models from './models';

export interface ConsumerRequest {
    /**
     * Name for the consumer instance, which will be used in URLs for the consumer.
     * This must be unique, at least within the proxy process handling the request.
     * If omitted, falls back on the automatically generated ID.
     * Using automatically generated names is recommended for most use cases.
     */
    name?: string;

    /**
     * The format of consumed messages, it must be JSON.
     */
    format?: string;

    /**
     * Sets the auto.offset.reset setting for the consumer
     */
    'auto.offset.reset'?: string;

    /**
     * Sets the auto.commit.enable setting for the consumer
     */
    'auto.commit.enable'?: string;

}