'use strict';
var Mockgen = require('../mockgen.js');
/**
 * Operations on /pets/{id}
 */
module.exports = {
    /**
     * summary: 
     * description: Returns a user based on a single ID, if the user does not have access to the pet
     * parameters: id
     * produces: application/json, application/xml, text/xml, text/html
     * responses: 200, default
     * operationId: findPetById
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/pets/{id}',
                operation: 'get',
                response: '200'
            }, callback);
        },
        default: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/pets/{id}',
                operation: 'get',
                response: 'default'
            }, callback);
        }
    },
    /**
     * summary: 
     * description: deletes a single pet based on the ID supplied
     * parameters: id
     * produces: 
     * responses: 204, default
     * operationId: deletePet
     */
    delete: {
        204: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/pets/{id}',
                operation: 'delete',
                response: '204'
            }, callback);
        },
        default: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/pets/{id}',
                operation: 'delete',
                response: 'default'
            }, callback);
        }
    }
};
