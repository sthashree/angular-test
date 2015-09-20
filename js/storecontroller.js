(function() {
	//product controller for product page
	app.controller('StoreController', function($scope, $http){
		var url="product-data.txt";
		$http.get(url).success( function(response) {
           $scope.products = response;
        });

        this.total = 0;

        this.getTotal = function(product) 
        {
        	product.total = product.price*product.quantity;
        };
	});

	// Tab controller
	app.controller('PanelController', function() {
		this.tab =1;

		this.isSelected = function(setTab) {
			return this.tab==setTab;
		};

		this.selectTab = function(setTab) {
			this.tab = setTab;
		};

		
	});

	// Review Controller
	app.controller('ReviewController', function() {
		this.review={};

		this.addReview = function(product) {
			product.reviews.push(this.review);

			this.review ={};
		}
	});


})();

