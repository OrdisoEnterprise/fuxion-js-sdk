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


import ApiClient from './ApiClient';
import AccountCreateSchema from './model/AccountCreateSchema';
import AccountReturnSchema from './model/AccountReturnSchema';
import AccountUpdateSchema from './model/AccountUpdateSchema';
import BearerResponse from './model/BearerResponse';
import BodyResetForgotPasswordAuthForgotPasswordPost from './model/BodyResetForgotPasswordAuthForgotPasswordPost';
import BodyResetResetPasswordAuthResetPasswordPost from './model/BodyResetResetPasswordAuthResetPasswordPost';
import BodyVerifyRequestTokenAuthRequestVerifyTokenPost from './model/BodyVerifyRequestTokenAuthRequestVerifyTokenPost';
import BodyVerifyVerifyAuthVerifyPost from './model/BodyVerifyVerifyAuthVerifyPost';
import Detail from './model/Detail';
import ErrorModel from './model/ErrorModel';
import HTTPValidationError from './model/HTTPValidationError';
import ReportReturnSchema from './model/ReportReturnSchema';
import Transaction from './model/Transaction';
import TransactionCreateSchema from './model/TransactionCreateSchema';
import TransactionReturnSchema from './model/TransactionReturnSchema';
import UserCreate from './model/UserCreate';
import UserRead from './model/UserRead';
import UserUpdate from './model/UserUpdate';
import ValidationError from './model/ValidationError';
import ValidationErrorLocInner from './model/ValidationErrorLocInner';
import AccountsApi from './api/AccountsApi';
import AuthApi from './api/AuthApi';
import DatasetsApi from './api/DatasetsApi';
import DefaultApi from './api/DefaultApi';
import ReportsApi from './api/ReportsApi';
import TransactionsApi from './api/TransactionsApi';
import UsersApi from './api/UsersApi';


/**
* REST API Server of Fuxion.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var FuxionServer = require('index'); // See note below*.
* var xxxSvc = new FuxionServer.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new FuxionServer.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new FuxionServer.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new FuxionServer.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 0.1.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The AccountCreateSchema model constructor.
     * @property {module:model/AccountCreateSchema}
     */
    AccountCreateSchema,

    /**
     * The AccountReturnSchema model constructor.
     * @property {module:model/AccountReturnSchema}
     */
    AccountReturnSchema,

    /**
     * The AccountUpdateSchema model constructor.
     * @property {module:model/AccountUpdateSchema}
     */
    AccountUpdateSchema,

    /**
     * The BearerResponse model constructor.
     * @property {module:model/BearerResponse}
     */
    BearerResponse,

    /**
     * The BodyResetForgotPasswordAuthForgotPasswordPost model constructor.
     * @property {module:model/BodyResetForgotPasswordAuthForgotPasswordPost}
     */
    BodyResetForgotPasswordAuthForgotPasswordPost,

    /**
     * The BodyResetResetPasswordAuthResetPasswordPost model constructor.
     * @property {module:model/BodyResetResetPasswordAuthResetPasswordPost}
     */
    BodyResetResetPasswordAuthResetPasswordPost,

    /**
     * The BodyVerifyRequestTokenAuthRequestVerifyTokenPost model constructor.
     * @property {module:model/BodyVerifyRequestTokenAuthRequestVerifyTokenPost}
     */
    BodyVerifyRequestTokenAuthRequestVerifyTokenPost,

    /**
     * The BodyVerifyVerifyAuthVerifyPost model constructor.
     * @property {module:model/BodyVerifyVerifyAuthVerifyPost}
     */
    BodyVerifyVerifyAuthVerifyPost,

    /**
     * The Detail model constructor.
     * @property {module:model/Detail}
     */
    Detail,

    /**
     * The ErrorModel model constructor.
     * @property {module:model/ErrorModel}
     */
    ErrorModel,

    /**
     * The HTTPValidationError model constructor.
     * @property {module:model/HTTPValidationError}
     */
    HTTPValidationError,

    /**
     * The ReportReturnSchema model constructor.
     * @property {module:model/ReportReturnSchema}
     */
    ReportReturnSchema,

    /**
     * The Transaction model constructor.
     * @property {module:model/Transaction}
     */
    Transaction,

    /**
     * The TransactionCreateSchema model constructor.
     * @property {module:model/TransactionCreateSchema}
     */
    TransactionCreateSchema,

    /**
     * The TransactionReturnSchema model constructor.
     * @property {module:model/TransactionReturnSchema}
     */
    TransactionReturnSchema,

    /**
     * The UserCreate model constructor.
     * @property {module:model/UserCreate}
     */
    UserCreate,

    /**
     * The UserRead model constructor.
     * @property {module:model/UserRead}
     */
    UserRead,

    /**
     * The UserUpdate model constructor.
     * @property {module:model/UserUpdate}
     */
    UserUpdate,

    /**
     * The ValidationError model constructor.
     * @property {module:model/ValidationError}
     */
    ValidationError,

    /**
     * The ValidationErrorLocInner model constructor.
     * @property {module:model/ValidationErrorLocInner}
     */
    ValidationErrorLocInner,

    /**
    * The AccountsApi service constructor.
    * @property {module:api/AccountsApi}
    */
    AccountsApi,

    /**
    * The AuthApi service constructor.
    * @property {module:api/AuthApi}
    */
    AuthApi,

    /**
    * The DatasetsApi service constructor.
    * @property {module:api/DatasetsApi}
    */
    DatasetsApi,

    /**
    * The DefaultApi service constructor.
    * @property {module:api/DefaultApi}
    */
    DefaultApi,

    /**
    * The ReportsApi service constructor.
    * @property {module:api/ReportsApi}
    */
    ReportsApi,

    /**
    * The TransactionsApi service constructor.
    * @property {module:api/TransactionsApi}
    */
    TransactionsApi,

    /**
    * The UsersApi service constructor.
    * @property {module:api/UsersApi}
    */
    UsersApi
};