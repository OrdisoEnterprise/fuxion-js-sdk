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
import ErrorModel from '../model/ErrorModel';
import HTTPValidationError from '../model/HTTPValidationError';
import UserRead from '../model/UserRead';
import UserUpdate from '../model/UserUpdate';

/**
* Users service.
* @module api/UsersApi
* @version 0.1.0
*/
export default class UsersApi {

    /**
    * Constructs a new UsersApi. 
    * @alias module:api/UsersApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the usersCurrentUserUsersMeGet operation.
     * @callback module:api/UsersApi~usersCurrentUserUsersMeGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserRead} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Users:Current User
     * @param {module:api/UsersApi~usersCurrentUserUsersMeGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserRead}
     */
    usersCurrentUserUsersMeGet(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2PasswordBearer'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = UserRead;
      return this.apiClient.callApi(
        '/users/me', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the usersDeleteUserUsersIdDelete operation.
     * @callback module:api/UsersApi~usersDeleteUserUsersIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Users:Delete User
     * @param {String} id 
     * @param {module:api/UsersApi~usersDeleteUserUsersIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    usersDeleteUserUsersIdDelete(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling usersDeleteUserUsersIdDelete");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2PasswordBearer'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/users/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the usersPatchCurrentUserUsersMePatch operation.
     * @callback module:api/UsersApi~usersPatchCurrentUserUsersMePatchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserRead} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Users:Patch Current User
     * @param {module:model/UserUpdate} userUpdate 
     * @param {module:api/UsersApi~usersPatchCurrentUserUsersMePatchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserRead}
     */
    usersPatchCurrentUserUsersMePatch(userUpdate, callback) {
      let postBody = userUpdate;
      // verify the required parameter 'userUpdate' is set
      if (userUpdate === undefined || userUpdate === null) {
        throw new Error("Missing the required parameter 'userUpdate' when calling usersPatchCurrentUserUsersMePatch");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2PasswordBearer'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = UserRead;
      return this.apiClient.callApi(
        '/users/me', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the usersPatchUserUsersIdPatch operation.
     * @callback module:api/UsersApi~usersPatchUserUsersIdPatchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserRead} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Users:Patch User
     * @param {String} id 
     * @param {module:model/UserUpdate} userUpdate 
     * @param {module:api/UsersApi~usersPatchUserUsersIdPatchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserRead}
     */
    usersPatchUserUsersIdPatch(id, userUpdate, callback) {
      let postBody = userUpdate;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling usersPatchUserUsersIdPatch");
      }
      // verify the required parameter 'userUpdate' is set
      if (userUpdate === undefined || userUpdate === null) {
        throw new Error("Missing the required parameter 'userUpdate' when calling usersPatchUserUsersIdPatch");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2PasswordBearer'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = UserRead;
      return this.apiClient.callApi(
        '/users/{id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the usersUserUsersIdGet operation.
     * @callback module:api/UsersApi~usersUserUsersIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserRead} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Users:User
     * @param {String} id 
     * @param {module:api/UsersApi~usersUserUsersIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserRead}
     */
    usersUserUsersIdGet(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling usersUserUsersIdGet");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2PasswordBearer'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = UserRead;
      return this.apiClient.callApi(
        '/users/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
