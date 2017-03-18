'use strict';
var Mockgen = require('./mockgen.js');
/**
 * Operations on /pets
 */
module.exports = {
    /**
     * summary: 
     * description: Returns all pets from the system that the user has access to
     * parameters: tags, limit
     * produces: application/json, application/xml, text/xml, text/html
     * responses: 200, default
     * operationId: findPets
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            //TODO: távolítsd el!!
            console.log('GET-data-pets request received');

            Mockgen().responses({
                path: '/pets',
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
                path: '/pets',
                operation: 'get',
                response: 'default'
            }, callback);
        }
    },
    /**
     * summary: 
     * description: Creates a new pet in the store.  Duplicates are allowed
     * parameters: pet
     * produces: application/json
     * responses: 200, default
     * operationId: addPet
     */
    post: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */

            //TODO: távolítsd el!!
            console.log('POST-data-pets request received');

            Mockgen().responses({
                path: '/pets',
                operation: 'post',
                response: '200'
            }, callback);
        },
        default: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */

            //TODO: távolítsd el!!
            console.log('UNKNOWN request received');

            Mockgen().responses({
                path: '/pets',
                operation: 'post',
                response: 'default'
            }, callback);
        }
    }
};
