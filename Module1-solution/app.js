(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope){
  $scope.listDish = "";
  $scope.verdict = "";
  $scope.color = "black";

  $scope.displayVerdict = function () {
    var result = "Please enter data first!";
    if($scope.listDish != ""){
      result = checkIfTooMuch($scope.listDish);
      $scope.color = "green";
    }
    else{
      $scope.color = "red";
    }
    $scope.verdict = result;
  };
};

function checkIfTooMuch(string) {
  var dishes = string.split(",");
  var count = 0
  for(var i = 0; i<dishes.length; i++){
      if(dishes[i] != "") count++;
  }
  if(count <= 3){
      return "Enjoy!";
  }
  else{
      return "Too much!";
  }
};

})();

// !function(){"use strict";function t(t){t.listDish="",t.verdict="",t.displayVerdict=function(){var i="Please enter data first!";""!=t.listDish&&(i=function(t){for(var i=t.split(","),n=0,e=0;e<i.length;e++)""!=i[e]&&n++;return n<=3?"Enjoy!":"Too much!"}(t.listDish)),t.verdict=i}}angular.module("LunchCheck",[]).controller("LunchCheckController",t),t.$inject=["$scope"]}();