/**
 * Created by mac on 10.06.15.
 */
arndApplication.controller('yesNoModalCtrl', ['$scope','modalSvc', languagesCtrl]);

function languagesCtrl($scope, modalSvc){
$scope.clickOk = function(){

    modalSvc.closeModal("yesNoModal");

}

$scope.clickCancel = function(){
    modalSvc.resolveModal("yesNoModal");
}
}