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
 * The UserUpdate model module.
 * @module model/UserUpdate
 * @version 0.1.0
 */
class UserUpdate {
    /**
     * Constructs a new <code>UserUpdate</code>.
     * @alias module:model/UserUpdate
     */
    constructor() { 
        
        UserUpdate.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UserUpdate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UserUpdate} obj Optional instance to populate.
     * @return {module:model/UserUpdate} The populated <code>UserUpdate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserUpdate();

            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
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
     * Validates the JSON data with respect to <code>UserUpdate</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UserUpdate</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['password'] && !(typeof data['password'] === 'string' || data['password'] instanceof String)) {
            throw new Error("Expected the field `password` to be a primitive type in the JSON string but got " + data['password']);
        }
        // ensure the json data is a string
        if (data['email'] && !(typeof data['email'] === 'string' || data['email'] instanceof String)) {
            throw new Error("Expected the field `email` to be a primitive type in the JSON string but got " + data['email']);
        }

        return true;
    }


}



/**
 * @member {String} password
 */
UserUpdate.prototype['password'] = undefined;

/**
 * @member {String} email
 */
UserUpdate.prototype['email'] = undefined;

/**
 * @member {Boolean} is_active
 */
UserUpdate.prototype['is_active'] = undefined;

/**
 * @member {Boolean} is_superuser
 */
UserUpdate.prototype['is_superuser'] = undefined;

/**
 * @member {Boolean} is_verified
 */
UserUpdate.prototype['is_verified'] = undefined;






export default UserUpdate;

