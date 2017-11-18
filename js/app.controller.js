'use strict';

app.controller('appController', ['$scope', 'constants', '$anchorScroll',
function($scope, constants, $anchorScroll) {
    console.log(screen.height);
    var currentScrollY = window.scrollY;
    var currentIndex = 0; constants.pageIds[0];
    var alreadyScrolled;
    console.log(currentIndex);
    $scope.header = {};
    function setHeader (value) {
        $scope.header.show = value;
        $scope.$apply();
    }
    window.onscroll = function (e) {
        var homeBlockHeight = document.getElementById('home_logo').offsetHeight - 5;
        if (window.scrollY > homeBlockHeight) {
            setHeader(true);
        } else {
            setHeader(false);
        }
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
