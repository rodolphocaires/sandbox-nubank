angular.module('nubank.controllers', [])
.controller('TimelineCtrl', function ($scope, $timeout) {
    $scope.refresh = function () {
        $timeout(function () {
            $scope.$broadcast('scroll.refreshComplete');
        }, 1000);
    };
})
.controller('HomeCtrl', function ($scope, $ionicSideMenuDelegate, $timeout, $ionicPopup) {
    $scope.slideHasChanged = function (index) {

    };

    $scope.showMenu = function () {
        if (!$ionicSideMenuDelegate.isOpen()) {
            $ionicSideMenuDelegate.toggleLeft(true);
        }
    };

    $scope.refresh = function () {
        $timeout(function () {
            $scope.$broadcast('scroll.refreshComplete');
        }, 1000);
    };

    var helpPopup = null;
    var blockPopup = null;

    $scope.showHelpPopup = function () {
        helpPopup = $ionicPopup.show({
            templateUrl: 'templates/help-popup.html',
            cssClass: 'help-popup',
            scope: $scope
        });
    };

    $scope.closeHelpPopup = function () {
        helpPopup.close();
    };

    $scope.showBlockPopup = function () {
        blockPopup = $ionicPopup.confirm({
            title: 'Bloqueio Temporário',
            template: 'Você quer bloquear temporariamente o seu cartão?',
            cssClass: 'block-popup',
            cancelType: 'button-light',
            cancelText: 'Cancelar',
            okType: 'button-nubank',
            okText: 'BLOQUEAR'
        });
        blockPopup.then(function(res) {
            if(res) {
                console.log('Blocked');
            } else {
                console.log('Cancel');
            }
        });
    }
})
.controller('AccountCtrl', function ($scope, $ionicHistory) {
    $scope.account = {
        email: 'john@doe.com',
        phone: '(00) 0000-0000'
    };

    $scope.goBack = function () {
        $ionicHistory.goBack();
    };
})
.controller('ReferralCtrl', function ($scope, $ionicHistory) {
    $scope.goBack = function () {
        $ionicHistory.goBack();
    };
});
