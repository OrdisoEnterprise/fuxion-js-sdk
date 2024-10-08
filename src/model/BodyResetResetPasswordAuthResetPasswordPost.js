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
 * The BodyResetResetPasswordAuthResetPasswordPost model module.
 * @module model/BodyResetResetPasswordAuthResetPasswordPost
 * @version 0.1.0
 */
class BodyResetResetPasswordAuthResetPasswordPost {
    /**
     * Constructs a new <code>BodyResetResetPasswordAuthResetPasswordPost</code>.
     * @alias module:model/BodyResetResetPasswordAuthResetPasswordPost
     * @param token {String} 
     * @param password {String} 
     */
    constructor(token, password) { 
        
        BodyResetResetPasswordAuthResetPasswordPost.initialize(this, token, password);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, token, password) { 
        obj['token'] = token;
        obj['password'] = password;
    }

    /**
     * Constructs a <code>BodyResetResetPasswordAuthResetPasswordPost</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BodyResetResetPasswordAuthResetPasswordPost} obj Optional instance to populate.
     * @return {module:model/BodyResetResetPasswordAuthResetPasswordPost} The populated <code>BodyResetResetPasswordAuthResetPasswordPost</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BodyResetResetPasswordAuthResetPasswordPost();

            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>BodyResetResetPasswordAuthResetPasswordPost</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BodyResetResetPasswordAuthResetPasswordPost</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of BodyResetResetPasswordAuthResetPasswordPost.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['token'] && !(typeof data['token'] === 'string' || data['token'] instanceof String)) {
            throw new Error("Expected the field `token` to be a primitive type in the JSON string but got " + data['token']);
        }
        // ensure the json data is a string
        if (data['password'] && !(typeof data['password'] === 'string' || data['password'] instanceof String)) {
            throw new Error("Expected the field `password` to be a primitive type in the JSON string but got " + data['password']);
        }

        return true;
    }


}

BodyResetResetPasswordAuthResetPasswordPost.RequiredProperties = ["token", "password"];

/**
 * @member {String} token
 */
BodyResetResetPasswordAuthResetPasswordPost.prototype['token'] = undefined;

/**
 * @member {String} password
 */
BodyResetResetPasswordAuthResetPasswordPost.prototype['password'] = undefined;






export default BodyResetResetPasswordAuthResetPasswordPost;

