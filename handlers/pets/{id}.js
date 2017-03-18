'use strict';
var dataProvider = require('../../data/pets/{id}.js');
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
     */
    get: function findPetById(req, res, next) {
        /**
         * Get the data for response 200
         * For response `default` status 200 is used.
         */
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
     * description: deletes a single pet based on the ID supplied
     * parameters: id
     * produces: 
     * responses: 204, default
     */
    delete: function deletePet(req, res, next) {
        /**
         * Get the data for response 204
         * For response `default` status 200 is used.
         */
        var status = 204;
        var provider = dataProvider['delete']['204'];
        provider(req, res, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            res.status(status).send(data && data.responses);
        });
    }
};
