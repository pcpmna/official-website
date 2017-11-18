'use strict';

app.controller('appController', ['$scope', 'constants', '$anchorScroll',
function($scope, constants, $anchorScroll) {
    console.log(screen.height);
    var currentScrollY = window.scrollY;
    var currentIndex = 0; constants.pageIds[0];
    var alreadyScrolled;
    var homeBlockHeight = document.getElementById('home_logo').offsetHeight - 5;

    $scope.header = {};

    function checkHeader () {
        if (window.scrollY > homeBlockHeight) {
            $scope.header.show = true;
        } else {
            $scope.header.show = false;
        }
    }
    checkHeader();
    window.onscroll = function (e) {
        checkHeader();
        $scope.$apply();

        // if(alreadyScrolled) {
        //     alreadyScrolled = false;
        //     return;
        // } else {
        //     alreadyScrolled = true;
        //     var scrollToIndex = (window.scrollY < currentScrollY) ? currentIndex  - 1 : currentIndex + 1;
        //     currentScrollY = window.scrollY;
        //     currentIndex = scrollToIndex;
        //     $anchorScroll(constants.pageIds[scrollToIndex]);
        // }
    };
}]);
