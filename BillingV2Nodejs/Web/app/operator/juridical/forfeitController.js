billingApplication.controller('forfeitController', ['$scope', 'dataService', 'modalSvc', 'toastr', '$rootScope', forfeitController]);

function forfeitController($scope, dataService, modalSvc, toastr, $rootScope) {

    var selectedItem = $scope.$parent.selectedItem;
    var id = selectedItem._id;
    var period = $scope.$parent.period;

    $scope.body = {
        forfeitDetails: {
            clientId: id,
            period: period
        },
        user: $rootScope.user
    };
//console.log("Summa"+$scope.body.forfeitDetails.sum);
    $scope.forfeitDetailsAdd = function () {
        dataService.post('/forfeitDetails/add', $scope.body).then(function (response) {

            $scope.$parent.getBalanceForClient(id);
            $scope.$parent.getAllBalance();

            console.log(response.result);
        });
    };
    //$scope.fineAdd();
}