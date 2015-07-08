var ReportLogic = require(_logicPath + 'report/reportLogic');

module.exports = function (router) {
    router.route("/report")
    .get(function (req, res) {
        ReportLogic.get(req.query.period, function (data) {
            operationResultBuilder(data, res);
        });
    });
}