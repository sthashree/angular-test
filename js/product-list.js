/**
* @desc: Directive to get featured product list
*/
angular.module('myApp.productlist',[]).directive('productList', function() {
	
	return {
		restrict: 'AE',
      	replace: 'true',
      	templateUrl: 'templates/product-list.html'
	};
}).controller('ProductController', function ($scope,$http) {
		var url="product-data.txt";
   		$http.get(url).success( function(response) {
	       $scope.products = response;
	    });

});