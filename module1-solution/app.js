(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope','$filter'];
function LunchCheckController($scope, $filter) {
  var lunchInputList = "";
  $scope.saveLunchList = function () {
    lunchInputList = $scope.lunchList.toString();
  };
  $scope.lunchChecker = function () {
    var lunchSplitedList = lunchInputList.split(',');

    if (lunchInputList.length == 0) {
      $scope.lunchCheckResult = "Please enter data first";
      $scope.color = "red"
    } else if (lunchSplitedList.length > 3) {
      console.log('More than 3');
      $scope.lunchCheckResult = "Too much!";
      $scope.color = "green"
    } else {
      console.log('Less or equal 3');
      $scope.lunchCheckResult = "Enjoy!";
      $scope.color = "green"
    };
  };
};

})();
