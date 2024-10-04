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
 * The BodyVerifyRequestTokenAuthRequestVerifyTokenPost model module.
 * @module model/BodyVerifyRequestTokenAuthRequestVerifyTokenPost
 * @version 0.1.0
 */
class BodyVerifyRequestTokenAuthRequestVerifyTokenPost {
    /**
     * Constructs a new <code>BodyVerifyRequestTokenAuthRequestVerifyTokenPost</code>.
     * @alias module:model/BodyVerifyRequestTokenAuthRequestVerifyTokenPost
     * @param email {String} 
     */
    constructor(email) { 
        
        BodyVerifyRequestTokenAuthRequestVerifyTokenPost.initialize(this, email);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, email) { 
        obj['email'] = email;
    }

    /**
     * Constructs a <code>BodyVerifyRequestTokenAuthRequestVerifyTokenPost</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BodyVerifyRequestTokenAuthRequestVerifyTokenPost} obj Optional instance to populate.
     * @return {module:model/BodyVerifyRequestTokenAuthRequestVerifyTokenPost} The populated <code>BodyVerifyRequestTokenAuthRequestVerifyTokenPost</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BodyVerifyRequestTokenAuthRequestVerifyTokenPost();

            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>BodyVerifyRequestTokenAuthRequestVerifyTokenPost</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BodyVerifyRequestTokenAuthRequestVerifyTokenPost</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of BodyVerifyRequestTokenAuthRequestVerifyTokenPost.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['email'] && !(typeof data['email'] === 'string' || data['email'] instanceof String)) {
            throw new Error("Expected the field `email` to be a primitive type in the JSON string but got " + data['email']);
        }

        return true;
    }


}

BodyVerifyRequestTokenAuthRequestVerifyTokenPost.RequiredProperties = ["email"];

/**
 * @member {String} email
 */
BodyVerifyRequestTokenAuthRequestVerifyTokenPost.prototype['email'] = undefined;






export default BodyVerifyRequestTokenAuthRequestVerifyTokenPost;

