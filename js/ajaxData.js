var app = angular.module('ajaxApp', []);

app.controller('StudentController', function ($scope,$http) {
		var url="data.txt";
   		$http.get(url).success( function(response) {
                           $scope.students = response;
                        });

});