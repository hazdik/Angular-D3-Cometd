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

import { Inject, Injectable, Optional }                      from '@angular/core';
import { Http, Headers, URLSearchParams }                    from '@angular/http';
import { RequestMethod, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Response, ResponseContentType }                     from '@angular/http';

import { Observable }                                        from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import * as models                                           from '../model/models';
import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';

/* tslint:disable:no-unused-variable member-ordering */


@Injectable()
export class ConsumerApi {
    protected basePath = 'http://11.11.254.102:8082/';
    public defaultHeaders: Headers = new Headers();
    public configuration: Configuration = new Configuration();

    constructor(protected http: Http, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
        }
    }

    /**
     * 
     * Manually assign a list of partitions to this consumer.
     * @param groupName The name of the consumer group
     * @param instance The ID of the consumer instance
     * @param partitions A list of partitions to assign to this consumer
     */
    public assignPartitions(groupName: string, instance: string, partitions?: Array<models.PartitionInTopic>, extraHttpRequestParams?: any): Observable<{}> {
        return this.assignPartitionsWithHttpInfo(groupName, instance, partitions, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * 
     * Commit a list of offsets for the consumer. When the post body is empty, it commits all the records that have been fetched by the consumer instance
     * @param groupName The name of the consumer group
     * @param instance The ID of the consumer instance
     * @param offsets A list of offsets to commit for partitions
     */
    public commitOffsets(groupName: string, instance: string, offsets?: Array<models.OffsetForPartition>, extraHttpRequestParams?: any): Observable<{}> {
        return this.commitOffsetsWithHttpInfo(groupName, instance, offsets, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * 
     * Create a new consumer instance in the consumer group
     * @param groupName The name of the consumer group.
     * @param consumerRequest 
     */
    public createInstanceToGroup(groupName: string, consumerRequest?: models.ConsumerRequest, extraHttpRequestParams?: any): Observable<models.ConsumerResponse> {
        return this.createInstanceToGroupWithHttpInfo(groupName, consumerRequest, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * 
     * Destroy the consumer instance.
     * @param groupName The name of the consumer group
     * @param instance The ID of the consumer instance
     */
    public destroyConsumer(groupName: string, instance: string, extraHttpRequestParams?: any): Observable<{}> {
        return this.destroyConsumerWithHttpInfo(groupName, instance, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * 
     * Fetch data for the topics or partitions specified using one of the subscribe/assign APIs.
     * @param groupName The name of the consumer group
     * @param instance The ID of the consumer instance
     * @param timeout The number of milliseconds for the underlying client library poll(timeout) request to fetch the records. Default to 5000ms.
     * @param maxBytes The maximum number of bytes of unencoded keys and values that should be included in the response. This provides approximate control over the size of responses and the amount of memory required to store the decoded response. The actual limit will be the minimum of this setting and the server-side configuration consumer.request.max.bytes. Default is unlimited.
     */
    public fetchData(groupName: string, instance: string, timeout?: number, maxBytes?: number, extraHttpRequestParams?: any): Observable<Array<models.RecordInfo>> {
        return this.fetchDataWithHttpInfo(groupName, instance, timeout, maxBytes, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * 
     * Get the last committed offsets for the given partitions (whether the commit happened by this process or another).
     * @param groupName The name of the consumer group
     * @param instance The ID of the consumer instance
     * @param partitions A list of partitions to find the last committed offsets for
     */
    public getLastCommittedOffsetsForPartition(groupName: string, instance: string, partitions?: Array<models.PartitionInTopic>, extraHttpRequestParams?: any): Observable<Array<models.OffsetForPartitionWithMetadata>> {
        return this.getLastCommittedOffsetsForPartitionWithHttpInfo(groupName, instance, partitions, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * 
     * Get the list of partitions currently manually assigned to this consumer.
     * @param groupName The name of the consumer group
     * @param instance The ID of the consumer instance
     */
    public getPartitions(groupName: string, instance: string, extraHttpRequestParams?: any): Observable<Array<models.PartitionInTopic>> {
        return this.getPartitionsWithHttpInfo(groupName, instance, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * 
     * Get the current subscribed list of topics.
     * @param groupName The name of the consumer group
     * @param instance The ID of the consumer instance
     */
    public getTopicsSubscriptions(groupName: string, instance: string, extraHttpRequestParams?: any): Observable<models.Topics> {
        return this.getTopicsSubscriptionsWithHttpInfo(groupName, instance, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * 
     * Seek to the first offset for each of the given partitions.
     * @param groupName The name of the consumer group
     * @param instance The ID of the consumer instance
     * @param partitions A list of partitions
     */
    public seekToFirstOffsetOfPartitions(groupName: string, instance: string, partitions?: Array<models.PartitionInTopic>, extraHttpRequestParams?: any): Observable<{}> {
        return this.seekToFirstOffsetOfPartitionsWithHttpInfo(groupName, instance, partitions, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * 
     * Seek to the last offset for each of the given partitions.
     * @param groupName The name of the consumer group
     * @param instance The ID of the consumer instance
     * @param partitions A list of partitions
     */
    public seekToLastOffsetOfPartitions(groupName: string, instance: string, partitions?: Array<models.PartitionInTopic>, extraHttpRequestParams?: any): Observable<{}> {
        return this.seekToLastOffsetOfPartitionsWithHttpInfo(groupName, instance, partitions, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * 
     * Overrides the fetch offsets that the consumer will use for the next set of records to fetch.
     * @param groupName The name of the consumer group
     * @param instance The ID of the consumer instance
     * @param offsets A list of offsets
     */
    public setFetchOffsets(groupName: string, instance: string, offsets?: Array<models.OffsetForPartition>, extraHttpRequestParams?: any): Observable<{}> {
        return this.setFetchOffsetsWithHttpInfo(groupName, instance, offsets, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * 
     * Subscribe to the given list of topics or a topic pattern to get dynamically assigned partitions. If a prior subscription exists, it would be replaced by the latest subscription.
     * @param groupName The name of the consumer group
     * @param instance The ID of the consumer instance
     * @param topics 
     */
    public subscribesTopics(groupName: string, instance: string, topics?: models.TopicSubscriptionRequest, extraHttpRequestParams?: any): Observable<{}> {
        return this.subscribesTopicsWithHttpInfo(groupName, instance, topics, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * 
     * Unsubscribe from topics currently subscribed.
     * @param groupName The name of the consumer group
     * @param instance The ID of the consumer instance
     */
    public unsubscribe(groupName: string, instance: string, extraHttpRequestParams?: any): Observable<{}> {
        return this.unsubscribeWithHttpInfo(groupName, instance, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }


    /**
     * 
     * Manually assign a list of partitions to this consumer.
     * @param groupName The name of the consumer group
     * @param instance The ID of the consumer instance
     * @param partitions A list of partitions to assign to this consumer
     */
    public assignPartitionsWithHttpInfo(groupName: string, instance: string, partitions?: Array<models.PartitionInTopic>, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/consumers/${group_name}/instances/${instance}/assignments`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'groupName' is not null or undefined
        if (groupName === null || groupName === undefined) {
            throw new Error('Required parameter groupName was null or undefined when calling assignPartitions.');
        }
        // verify required parameter 'instance' is not null or undefined
        if (instance === null || instance === undefined) {
            throw new Error('Required parameter instance was null or undefined when calling assignPartitions.');
        }
        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/vnd.kafka.v2+json'
        ];

        headers.set('Content-Type', 'application/json');

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Post,
            headers: headers,
            body: partitions == null ? '' : JSON.stringify(partitions), // https://github.com/angular/angular/issues/10612
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * 
     * Commit a list of offsets for the consumer. When the post body is empty, it commits all the records that have been fetched by the consumer instance
     * @param groupName The name of the consumer group
     * @param instance The ID of the consumer instance
     * @param offsets A list of offsets to commit for partitions
     */
    public commitOffsetsWithHttpInfo(groupName: string, instance: string, offsets?: Array<models.OffsetForPartition>, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/consumers/${group_name}/instances/${instance}/offsets`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'groupName' is not null or undefined
        if (groupName === null || groupName === undefined) {
            throw new Error('Required parameter groupName was null or undefined when calling commitOffsets.');
        }
        // verify required parameter 'instance' is not null or undefined
        if (instance === null || instance === undefined) {
            throw new Error('Required parameter instance was null or undefined when calling commitOffsets.');
        }
        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/vnd.kafka.v2+json'
        ];

        headers.set('Content-Type', 'application/json');

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Post,
            headers: headers,
            body: offsets == null ? '' : JSON.stringify(offsets), // https://github.com/angular/angular/issues/10612
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * 
     * Create a new consumer instance in the consumer group
     * @param groupName The name of the consumer group.
     * @param consumerRequest 
     */
    public createInstanceToGroupWithHttpInfo(groupName: string, consumerRequest?: models.ConsumerRequest, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/consumers/${group_name}`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'groupName' is not null or undefined
        if (groupName === null || groupName === undefined) {
            throw new Error('Required parameter groupName was null or undefined when calling createInstanceToGroup.');
        }
        // to determine the Content-Type header
        let consumes: string[] = [
            'application/vnd.kafka.v2+json'
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/vnd.kafka.v2+json'
        ];

        headers.set('Content-Type', 'application/json');

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Post,
            headers: headers,
            body: consumerRequest == null ? '' : JSON.stringify(consumerRequest), // https://github.com/angular/angular/issues/10612
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * 
     * Destroy the consumer instance.
     * @param groupName The name of the consumer group
     * @param instance The ID of the consumer instance
     */
    public destroyConsumerWithHttpInfo(groupName: string, instance: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/consumers/${group_name}/instances/${instance}`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'groupName' is not null or undefined
        if (groupName === null || groupName === undefined) {
            throw new Error('Required parameter groupName was null or undefined when calling destroyConsumer.');
        }
        // verify required parameter 'instance' is not null or undefined
        if (instance === null || instance === undefined) {
            throw new Error('Required parameter instance was null or undefined when calling destroyConsumer.');
        }
        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        // to determine the Accept header
        let produces: string[] = [
        ];

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Delete,
            headers: headers,
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * 
     * Fetch data for the topics or partitions specified using one of the subscribe/assign APIs.
     * @param groupName The name of the consumer group
     * @param instance The ID of the consumer instance
     * @param timeout The number of milliseconds for the underlying client library poll(timeout) request to fetch the records. Default to 5000ms.
     * @param maxBytes The maximum number of bytes of unencoded keys and values that should be included in the response. This provides approximate control over the size of responses and the amount of memory required to store the decoded response. The actual limit will be the minimum of this setting and the server-side configuration consumer.request.max.bytes. Default is unlimited.
     */
    public fetchDataWithHttpInfo(groupName: string, instance: string, timeout?: number, maxBytes?: number, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/consumers/${group_name}/instances/${instance}/records`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'groupName' is not null or undefined
        if (groupName === null || groupName === undefined) {
            throw new Error('Required parameter groupName was null or undefined when calling fetchData.');
        }
        // verify required parameter 'instance' is not null or undefined
        if (instance === null || instance === undefined) {
            throw new Error('Required parameter instance was null or undefined when calling fetchData.');
        }
        if (timeout !== undefined) {
            if(timeout instanceof Date) {
                queryParameters.set('timeout', <any>timeout.d.toISOString());
            } else {
                queryParameters.set('timeout', <any>timeout);
            }
        }

        if (maxBytes !== undefined) {
            if(maxBytes instanceof Date) {
                queryParameters.set('max_bytes', <any>maxBytes.d.toISOString());
            } else {
                queryParameters.set('max_bytes', <any>maxBytes);
            }
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'application/vnd.kafka.json.v2+json'
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/vnd.kafka.json.v2+json'
        ];

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * 
     * Get the last committed offsets for the given partitions (whether the commit happened by this process or another).
     * @param groupName The name of the consumer group
     * @param instance The ID of the consumer instance
     * @param partitions A list of partitions to find the last committed offsets for
     */
    public getLastCommittedOffsetsForPartitionWithHttpInfo(groupName: string, instance: string, partitions?: Array<models.PartitionInTopic>, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/consumers/${group_name}/instances/${instance}/offsets`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'groupName' is not null or undefined
        if (groupName === null || groupName === undefined) {
            throw new Error('Required parameter groupName was null or undefined when calling getLastCommittedOffsetsForPartition.');
        }
        // verify required parameter 'instance' is not null or undefined
        if (instance === null || instance === undefined) {
            throw new Error('Required parameter instance was null or undefined when calling getLastCommittedOffsetsForPartition.');
        }
        // to determine the Content-Type header
        let consumes: string[] = [
            'application/vnd.kafka.v2+json'
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/vnd.kafka.v2+json'
        ];

        headers.set('Content-Type', 'application/json');

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            body: partitions == null ? '' : JSON.stringify(partitions), // https://github.com/angular/angular/issues/10612
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * 
     * Get the list of partitions currently manually assigned to this consumer.
     * @param groupName The name of the consumer group
     * @param instance The ID of the consumer instance
     */
    public getPartitionsWithHttpInfo(groupName: string, instance: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/consumers/${group_name}/instances/${instance}/assignments`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'groupName' is not null or undefined
        if (groupName === null || groupName === undefined) {
            throw new Error('Required parameter groupName was null or undefined when calling getPartitions.');
        }
        // verify required parameter 'instance' is not null or undefined
        if (instance === null || instance === undefined) {
            throw new Error('Required parameter instance was null or undefined when calling getPartitions.');
        }
        // to determine the Content-Type header
        let consumes: string[] = [
            'application/vnd.kafka.v2+json'
        ];

        // to determine the Accept header
        let produces: string[] = [
        ];

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * 
     * Get the current subscribed list of topics.
     * @param groupName The name of the consumer group
     * @param instance The ID of the consumer instance
     */
    public getTopicsSubscriptionsWithHttpInfo(groupName: string, instance: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/consumers/${group_name}/instances/${instance}/subscription`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'groupName' is not null or undefined
        if (groupName === null || groupName === undefined) {
            throw new Error('Required parameter groupName was null or undefined when calling getTopicsSubscriptions.');
        }
        // verify required parameter 'instance' is not null or undefined
        if (instance === null || instance === undefined) {
            throw new Error('Required parameter instance was null or undefined when calling getTopicsSubscriptions.');
        }
        // to determine the Content-Type header
        let consumes: string[] = [
            'application/vnd.kafka.json.v2+json'
        ];

        // to determine the Accept header
        let produces: string[] = [
        ];

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * 
     * Seek to the first offset for each of the given partitions.
     * @param groupName The name of the consumer group
     * @param instance The ID of the consumer instance
     * @param partitions A list of partitions
     */
    public seekToFirstOffsetOfPartitionsWithHttpInfo(groupName: string, instance: string, partitions?: Array<models.PartitionInTopic>, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/consumers/${group_name}/instances/${instance}/positions/beginning`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'groupName' is not null or undefined
        if (groupName === null || groupName === undefined) {
            throw new Error('Required parameter groupName was null or undefined when calling seekToFirstOffsetOfPartitions.');
        }
        // verify required parameter 'instance' is not null or undefined
        if (instance === null || instance === undefined) {
            throw new Error('Required parameter instance was null or undefined when calling seekToFirstOffsetOfPartitions.');
        }
        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/vnd.kafka.v2+json'
        ];

        headers.set('Content-Type', 'application/json');

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Post,
            headers: headers,
            body: partitions == null ? '' : JSON.stringify(partitions), // https://github.com/angular/angular/issues/10612
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * 
     * Seek to the last offset for each of the given partitions.
     * @param groupName The name of the consumer group
     * @param instance The ID of the consumer instance
     * @param partitions A list of partitions
     */
    public seekToLastOffsetOfPartitionsWithHttpInfo(groupName: string, instance: string, partitions?: Array<models.PartitionInTopic>, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/consumers/${group_name}/instances/${instance}/positions/end`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'groupName' is not null or undefined
        if (groupName === null || groupName === undefined) {
            throw new Error('Required parameter groupName was null or undefined when calling seekToLastOffsetOfPartitions.');
        }
        // verify required parameter 'instance' is not null or undefined
        if (instance === null || instance === undefined) {
            throw new Error('Required parameter instance was null or undefined when calling seekToLastOffsetOfPartitions.');
        }
        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/vnd.kafka.v2+json'
        ];

        headers.set('Content-Type', 'application/json');

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Post,
            headers: headers,
            body: partitions == null ? '' : JSON.stringify(partitions), // https://github.com/angular/angular/issues/10612
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * 
     * Overrides the fetch offsets that the consumer will use for the next set of records to fetch.
     * @param groupName The name of the consumer group
     * @param instance The ID of the consumer instance
     * @param offsets A list of offsets
     */
    public setFetchOffsetsWithHttpInfo(groupName: string, instance: string, offsets?: Array<models.OffsetForPartition>, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/consumers/${group_name}/instances/${instance}/positions`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'groupName' is not null or undefined
        if (groupName === null || groupName === undefined) {
            throw new Error('Required parameter groupName was null or undefined when calling setFetchOffsets.');
        }
        // verify required parameter 'instance' is not null or undefined
        if (instance === null || instance === undefined) {
            throw new Error('Required parameter instance was null or undefined when calling setFetchOffsets.');
        }
        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/vnd.kafka.v2+json'
        ];

        headers.set('Content-Type', 'application/json');

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Post,
            headers: headers,
            body: offsets == null ? '' : JSON.stringify(offsets), // https://github.com/angular/angular/issues/10612
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * 
     * Subscribe to the given list of topics or a topic pattern to get dynamically assigned partitions. If a prior subscription exists, it would be replaced by the latest subscription.
     * @param groupName The name of the consumer group
     * @param instance The ID of the consumer instance
     * @param topics 
     */
    public subscribesTopicsWithHttpInfo(groupName: string, instance: string, topics?: models.TopicSubscriptionRequest, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/consumers/${group_name}/instances/${instance}/subscription`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'groupName' is not null or undefined
        if (groupName === null || groupName === undefined) {
            throw new Error('Required parameter groupName was null or undefined when calling subscribesTopics.');
        }
        // verify required parameter 'instance' is not null or undefined
        if (instance === null || instance === undefined) {
            throw new Error('Required parameter instance was null or undefined when calling subscribesTopics.');
        }
        // to determine the Content-Type header
        let consumes: string[] = [
            'application/vnd.kafka.json.v2+json'
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/vnd.kafka.json.v2+json'
        ];

        headers.set('Content-Type', 'application/json');

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Post,
            headers: headers,
            body: topics == null ? '' : JSON.stringify(topics), // https://github.com/angular/angular/issues/10612
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * 
     * Unsubscribe from topics currently subscribed.
     * @param groupName The name of the consumer group
     * @param instance The ID of the consumer instance
     */
    public unsubscribeWithHttpInfo(groupName: string, instance: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/consumers/${group_name}/instances/${instance}/subscription`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'groupName' is not null or undefined
        if (groupName === null || groupName === undefined) {
            throw new Error('Required parameter groupName was null or undefined when calling unsubscribe.');
        }
        // verify required parameter 'instance' is not null or undefined
        if (instance === null || instance === undefined) {
            throw new Error('Required parameter instance was null or undefined when calling unsubscribe.');
        }
        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        // to determine the Accept header
        let produces: string[] = [
        ];

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Delete,
            headers: headers,
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

}
