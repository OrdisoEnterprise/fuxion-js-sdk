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
import Transaction from './Transaction';

/**
 * The ReportReturnSchema model module.
 * @module model/ReportReturnSchema
 * @version 0.1.0
 */
class ReportReturnSchema {
    /**
     * Constructs a new <code>ReportReturnSchema</code>.
     * @alias module:model/ReportReturnSchema
     * @param fileName {String} 
     */
    constructor(fileName) { 
        
        ReportReturnSchema.initialize(this, fileName);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, fileName) { 
        obj['file_name'] = fileName;
    }

    /**
     * Constructs a <code>ReportReturnSchema</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReportReturnSchema} obj Optional instance to populate.
     * @return {module:model/ReportReturnSchema} The populated <code>ReportReturnSchema</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ReportReturnSchema();

            if (data.hasOwnProperty('file_name')) {
                obj['file_name'] = ApiClient.convertToType(data['file_name'], 'String');
            }
            if (data.hasOwnProperty('transactions')) {
                obj['transactions'] = ApiClient.convertToType(data['transactions'], [Transaction]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ReportReturnSchema</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ReportReturnSchema</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ReportReturnSchema.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['file_name'] && !(typeof data['file_name'] === 'string' || data['file_name'] instanceof String)) {
            throw new Error("Expected the field `file_name` to be a primitive type in the JSON string but got " + data['file_name']);
        }
        if (data['transactions']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['transactions'])) {
                throw new Error("Expected the field `transactions` to be an array in the JSON data but got " + data['transactions']);
            }
            // validate the optional field `transactions` (array)
            for (const item of data['transactions']) {
                Transaction.validateJSON(item);
            };
        }

        return true;
    }


}

ReportReturnSchema.RequiredProperties = ["file_name"];

/**
 * @member {String} file_name
 */
ReportReturnSchema.prototype['file_name'] = undefined;

/**
 * @member {Array.<module:model/Transaction>} transactions
 */
ReportReturnSchema.prototype['transactions'] = undefined;






export default ReportReturnSchema;

