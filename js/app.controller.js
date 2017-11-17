'use strict';

app.controller('appController', ['$scope', 'constants', function($scope, constants) {
    $scope.introMessage = constants.introMessage;
}]);
