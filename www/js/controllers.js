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

        $scope.showHelpPopup = function () {
            helpPopup = $ionicPopup.show({
                templateUrl: 'templates/help-popup.html',
                scope: $scope
            });
        };

        $scope.closeHelpPopup = function () {
            helpPopup.close();
        };
    })
    .controller('AccountCtrl', function ($scope, $ionicHistory) {
        $scope.account = {
            email: 'john@doe.com',
            phone: '(00) 0000-0000'
        };

        $scope.goBack = function () {
            $ionicHistory.goBack();
        };
    });
