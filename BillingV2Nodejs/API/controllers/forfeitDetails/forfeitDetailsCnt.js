var Logic = require('../../logicLayer/forfeitDetails/forfeitDetailsLogic');

module.exports = function (router) {

    router.route('/forfeitDetails/add').
        post(function (req, res) {
            Logic.add(req.body, function (data) {
                operationResultBuilder(data, res);
            });
        });

};