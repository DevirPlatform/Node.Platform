var TestRepo = require('../../dataLayer/repositories/test/TestRepo');

module.exports = function (router) {

    router.route('/test').
        get(function (req, res) {
            TestRepo.test(function (data) {
                operationResultBuilder(data, res);
            });
        });
};