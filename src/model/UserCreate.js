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

import ApiClient from '../ApiClient';

/**
 * The UserCreate model module.
 * @module model/UserCreate
 * @version 0.1.0
 */
class UserCreate {
    /**
     * Constructs a new <code>UserCreate</code>.
     * @alias module:model/UserCreate
     * @param email {String} 
     * @param password {String} 
     */
    constructor(email, password) { 
        
        UserCreate.initialize(this, email, password);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, email, password) { 
        obj['email'] = email;
        obj['password'] = password;
        obj['is_active'] = true;
        obj['is_superuser'] = false;
        obj['is_verified'] = false;
    }

    /**
     * Constructs a <code>UserCreate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UserCreate} obj Optional instance to populate.
     * @return {module:model/UserCreate} The populated <code>UserCreate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserCreate();

            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
            if (data.hasOwnProperty('is_active')) {
                obj['is_active'] = ApiClient.convertToType(data['is_active'], 'Boolean');
            }
            if (data.hasOwnProperty('is_superuser')) {
                obj['is_superuser'] = ApiClient.convertToType(data['is_superuser'], 'Boolean');
            }
            if (data.hasOwnProperty('is_verified')) {
                obj['is_verified'] = ApiClient.convertToType(data['is_verified'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UserCreate</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UserCreate</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of UserCreate.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['email'] && !(typeof data['email'] === 'string' || data['email'] instanceof String)) {
            throw new Error("Expected the field `email` to be a primitive type in the JSON string but got " + data['email']);
        }
        // ensure the json data is a string
        if (data['password'] && !(typeof data['password'] === 'string' || data['password'] instanceof String)) {
            throw new Error("Expected the field `password` to be a primitive type in the JSON string but got " + data['password']);
        }

        return true;
    }


}

UserCreate.RequiredProperties = ["email", "password"];

/**
 * @member {String} email
 */
UserCreate.prototype['email'] = undefined;

/**
 * @member {String} password
 */
UserCreate.prototype['password'] = undefined;

/**
 * @member {Boolean} is_active
 * @default true
 */
UserCreate.prototype['is_active'] = true;

/**
 * @member {Boolean} is_superuser
 * @default false
 */
UserCreate.prototype['is_superuser'] = false;

/**
 * @member {Boolean} is_verified
 * @default false
 */
UserCreate.prototype['is_verified'] = false;






export default UserCreate;

