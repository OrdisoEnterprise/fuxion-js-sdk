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
 * The AccountCreateSchema model module.
 * @module model/AccountCreateSchema
 * @version 0.1.0
 */
class AccountCreateSchema {
    /**
     * Constructs a new <code>AccountCreateSchema</code>.
     * @alias module:model/AccountCreateSchema
     * @param id {String} 
     * @param bankName {String} 
     * @param accountName {String} 
     */
    constructor(id, bankName, accountName) { 
        
        AccountCreateSchema.initialize(this, id, bankName, accountName);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, bankName, accountName) { 
        obj['id'] = id;
        obj['bank_name'] = bankName;
        obj['account_name'] = accountName;
    }

    /**
     * Constructs a <code>AccountCreateSchema</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AccountCreateSchema} obj Optional instance to populate.
     * @return {module:model/AccountCreateSchema} The populated <code>AccountCreateSchema</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AccountCreateSchema();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('bank_name')) {
                obj['bank_name'] = ApiClient.convertToType(data['bank_name'], 'String');
            }
            if (data.hasOwnProperty('account_name')) {
                obj['account_name'] = ApiClient.convertToType(data['account_name'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AccountCreateSchema</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AccountCreateSchema</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of AccountCreateSchema.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['bank_name'] && !(typeof data['bank_name'] === 'string' || data['bank_name'] instanceof String)) {
            throw new Error("Expected the field `bank_name` to be a primitive type in the JSON string but got " + data['bank_name']);
        }
        // ensure the json data is a string
        if (data['account_name'] && !(typeof data['account_name'] === 'string' || data['account_name'] instanceof String)) {
            throw new Error("Expected the field `account_name` to be a primitive type in the JSON string but got " + data['account_name']);
        }

        return true;
    }


}

AccountCreateSchema.RequiredProperties = ["id", "bank_name", "account_name"];

/**
 * @member {String} id
 */
AccountCreateSchema.prototype['id'] = undefined;

/**
 * @member {String} bank_name
 */
AccountCreateSchema.prototype['bank_name'] = undefined;

/**
 * @member {String} account_name
 */
AccountCreateSchema.prototype['account_name'] = undefined;






export default AccountCreateSchema;
