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
import Detail from './Detail';

/**
 * The ErrorModel model module.
 * @module model/ErrorModel
 * @version 0.1.0
 */
class ErrorModel {
    /**
     * Constructs a new <code>ErrorModel</code>.
     * @alias module:model/ErrorModel
     * @param detail {module:model/Detail} 
     */
    constructor(detail) { 
        
        ErrorModel.initialize(this, detail);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, detail) { 
        obj['detail'] = detail;
    }

    /**
     * Constructs a <code>ErrorModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ErrorModel} obj Optional instance to populate.
     * @return {module:model/ErrorModel} The populated <code>ErrorModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ErrorModel();

            if (data.hasOwnProperty('detail')) {
                obj['detail'] = Detail.constructFromObject(data['detail']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ErrorModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ErrorModel</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ErrorModel.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `detail`
        if (data['detail']) { // data not null
          Detail.validateJSON(data['detail']);
        }

        return true;
    }


}

ErrorModel.RequiredProperties = ["detail"];

/**
 * @member {module:model/Detail} detail
 */
ErrorModel.prototype['detail'] = undefined;






export default ErrorModel;
