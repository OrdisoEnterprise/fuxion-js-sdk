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


import ApiClient from "../ApiClient";
import HTTPValidationError from '../model/HTTPValidationError';
import ReportReturnSchema from '../model/ReportReturnSchema';

/**
* Reports service.
* @module api/ReportsApi
* @version 0.1.0
*/
export default class ReportsApi {

    /**
    * Constructs a new ReportsApi. 
    * @alias module:api/ReportsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the uploadFileApiReportsParsePost operation.
     * @callback module:api/ReportsApi~uploadFileApiReportsParsePostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ReportReturnSchema} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Parse a report file
     * @param {String} accountId 
     * @param {String} parserId 
     * @param {File} file 
     * @param {module:api/ReportsApi~uploadFileApiReportsParsePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ReportReturnSchema}
     */
    uploadFileApiReportsParsePost(accountId, parserId, file, callback) {
      let postBody = null;
      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling uploadFileApiReportsParsePost");
      }
      // verify the required parameter 'parserId' is set
      if (parserId === undefined || parserId === null) {
        throw new Error("Missing the required parameter 'parserId' when calling uploadFileApiReportsParsePost");
      }
      // verify the required parameter 'file' is set
      if (file === undefined || file === null) {
        throw new Error("Missing the required parameter 'file' when calling uploadFileApiReportsParsePost");
      }

      let pathParams = {
      };
      let queryParams = {
        'account_id': accountId,
        'parser_id': parserId
      };
      let headerParams = {
      };
      let formParams = {
        'file': file
      };

      let authNames = ['OAuth2PasswordBearer'];
      let contentTypes = ['multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = ReportReturnSchema;
      return this.apiClient.callApi(
        '/api/reports/parse', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}