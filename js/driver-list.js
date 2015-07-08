angular.module('myApp.driverlist',[]).directive('driverList', function() {
	
	return {
		restrict: 'AE',
      	replace: 'true',
      	templateUrl: 'templates/driverlist-template.html'
	};
}).controller('driversController', function($scope, $http) {
  $scope.nameFilter = null;
  $scope.driversList = [];
  
  url = 'http://ergast.com/api/f1/2013/driverStandings.json?callback=JSON_CALLBACK';
  $http.get(url).success(function (response) {
      //Dig into the responde to get the relevant data
      $scope.driversList = response.MRData.StandingsTable.StandingsLists[0].DriverStandings;
  });
});