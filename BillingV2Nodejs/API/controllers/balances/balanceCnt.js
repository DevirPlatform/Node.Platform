var Logic = require('../../logicLayer/balance/balanceLogic');

module.exports = function (router) {

    router.route('/balance/getByPeriod').
        get(function (req, res) {
            Logic.getByPeriod(req.query.dateFrom, req.query.dateTo, function (data) {
                operationResultBuilder(data, res);
            });
        });

    router.route('/balance/getAllBalance').
        get(function (req, res) {
            Logic.getAllBalance(function (data) {
                operationResultBuilder(data, res);
            });
        });


    router.route('/balance/getTotalByClientJurId').
        get(function (req, res) {
            Logic.getTotalByClientJurId(req.query.clientJurId, function (data) {
                operationResultBuilder(data, res);
            });
        });

    router.route('/balance/getByClientJurId').
        get(function (req, res) {
            Logic.getByClientJurId(req.query.clientJurId, function (data) {
                operationResultBuilder(data, res);
            });
        });

};