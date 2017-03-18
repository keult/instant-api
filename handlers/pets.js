'use strict';
var dataProvider = require('../data/pets.js');
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
     */
    get: function findPets(req, res, next) {
        /**
         * Get the data for response 200
         * For response `default` status 200 is used.
         */

        //TODO: távolítsd el!!
        console.log('GET-findPets request received');

        var status = 200;
        var provider = dataProvider['get']['200'];
        provider(req, res, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            res.status(status).send(data && data.responses);
        });
    },
    /**
     * summary: 
     * description: Creates a new pet in the store.  Duplicates are allowed
     * parameters: pet
     * produces: application/json
     * responses: 200, default
     */
    post: function addPet(req, res, next) {
        /**
         * Get the data for response 200
         * For response `default` status 200 is used.
         */

        //TODO: távolítsd el!!
        console.log('POST-addPet request received');

        var status = 200;
        var provider = dataProvider['post']['200'];
        provider(req, res, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            res.status(status).send(data && data.responses);
        });
    }
};
