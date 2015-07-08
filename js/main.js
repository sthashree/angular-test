
var app = angular.module('myApp', [
							'myApp.driverlist',
							'myApp.studentlist',
  							'myApp.services']);


app.controller('greetingController', function($scope) {
  $scope.person = {
    name: "Guest"
  };
  $scope.sayHello = function() {
    $scope.person.greeted = true;
    $scope.person.reply =  'Hi '+$scope.person.name+' . Thank you.';
  }
});
