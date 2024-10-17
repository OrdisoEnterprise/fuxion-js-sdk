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
 * The TransactionUpdateSchema model module.
 * @module model/TransactionUpdateSchema
 * @version 0.1.0
 */
class TransactionUpdateSchema {
    /**
     * Constructs a new <code>TransactionUpdateSchema</code>.
     * @alias module:model/TransactionUpdateSchema
     * @param amount {Number} 
     * @param concept {String} 
     * @param timestamp {Date} 
     */
    constructor(amount, concept, timestamp) { 
        
        TransactionUpdateSchema.initialize(this, amount, concept, timestamp);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, amount, concept, timestamp) { 
        obj['amount'] = amount;
        obj['concept'] = concept;
        obj['timestamp'] = timestamp;
        obj['description'] = '';
    }

    /**
     * Constructs a <code>TransactionUpdateSchema</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransactionUpdateSchema} obj Optional instance to populate.
     * @return {module:model/TransactionUpdateSchema} The populated <code>TransactionUpdateSchema</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TransactionUpdateSchema();

            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('concept')) {
                obj['concept'] = ApiClient.convertToType(data['concept'], 'String');
            }
            if (data.hasOwnProperty('timestamp')) {
                obj['timestamp'] = ApiClient.convertToType(data['timestamp'], 'Date');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('remaining_balance')) {
                obj['remaining_balance'] = ApiClient.convertToType(data['remaining_balance'], 'Number');
            }
            if (data.hasOwnProperty('reference')) {
                obj['reference'] = ApiClient.convertToType(data['reference'], 'String');
            }
            if (data.hasOwnProperty('category')) {
                obj['category'] = ApiClient.convertToType(data['category'], 'String');
            }
            if (data.hasOwnProperty('subcategory')) {
                obj['subcategory'] = ApiClient.convertToType(data['subcategory'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TransactionUpdateSchema</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TransactionUpdateSchema</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of TransactionUpdateSchema.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['concept'] && !(typeof data['concept'] === 'string' || data['concept'] instanceof String)) {
            throw new Error("Expected the field `concept` to be a primitive type in the JSON string but got " + data['concept']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['reference'] && !(typeof data['reference'] === 'string' || data['reference'] instanceof String)) {
            throw new Error("Expected the field `reference` to be a primitive type in the JSON string but got " + data['reference']);
        }
        // ensure the json data is a string
        if (data['category'] && !(typeof data['category'] === 'string' || data['category'] instanceof String)) {
            throw new Error("Expected the field `category` to be a primitive type in the JSON string but got " + data['category']);
        }
        // ensure the json data is a string
        if (data['subcategory'] && !(typeof data['subcategory'] === 'string' || data['subcategory'] instanceof String)) {
            throw new Error("Expected the field `subcategory` to be a primitive type in the JSON string but got " + data['subcategory']);
        }

        return true;
    }


}

TransactionUpdateSchema.RequiredProperties = ["amount", "concept", "timestamp"];

/**
 * @member {Number} amount
 */
TransactionUpdateSchema.prototype['amount'] = undefined;

/**
 * @member {String} concept
 */
TransactionUpdateSchema.prototype['concept'] = undefined;

/**
 * @member {Date} timestamp
 */
TransactionUpdateSchema.prototype['timestamp'] = undefined;

/**
 * @member {String} description
 * @default ''
 */
TransactionUpdateSchema.prototype['description'] = '';

/**
 * @member {Number} remaining_balance
 */
TransactionUpdateSchema.prototype['remaining_balance'] = undefined;

/**
 * @member {String} reference
 */
TransactionUpdateSchema.prototype['reference'] = undefined;

/**
 * @member {String} category
 */
TransactionUpdateSchema.prototype['category'] = undefined;

/**
 * @member {String} subcategory
 */
TransactionUpdateSchema.prototype['subcategory'] = undefined;






export default TransactionUpdateSchema;
