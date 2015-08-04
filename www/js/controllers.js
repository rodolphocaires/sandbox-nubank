angular.module('starter.controllers', [])
.controller('TimelineCtrl', function ($scope, $timeout) {
    $scope.refresh = function () {
        $timeout(function () {
            $scope.$broadcast('scroll.refreshComplete');
        }, 1000);
    };
})
.controller('HomeCtrl', function ($scope, $ionicSideMenuDelegate, $timeout) {
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
});
