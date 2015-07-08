angular.module('myApp.studentlist',[]).directive('studentList', function() {
	
	return {
		restrict: 'AE',
      	replace: 'true',
      	templateUrl: 'template/student-list-template.html'
	};
}).controller('StudentController', function ($scope,$http) {
		var url="data.txt";
   		$http.get(url).success( function(response) {
                           $scope.students = response;
                        });

});