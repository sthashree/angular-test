
var app = angular.module('myApp', [
              'ngRoute',
              'myApp.productlist']);

  app.config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl : 'pages/home.html',
        controller  : 'mainController'
      })
      // route for the about page
      .when('/product', {
          templateUrl : 'pages/product.html',
          controller  : 'aboutController'
      })
      // route for the contact page
      .when('/gallery', {
          templateUrl : 'pages/gallery.html',
          controller  : 'galleryController'
      })
      // route for the contact page
      .when('/contact', {
          templateUrl : 'pages/contact.html',
          controller  : 'contactController'
      });
  });

  // create the controller and inject Angular's $scope
      app.controller('mainController', function($scope) {
          // create a message to display in our view
          $scope.message = 'Everyone come and see how good I look!';
      });

      app.controller('aboutController', function($scope) {
          $scope.message = 'Look! I am an about page.';
      });

      app.controller('galleryController', function($scope,$http ) {
        var url="images.json";
        $('#gallery').galereya({
            load: function(next) {
                $.getJSON(url, function(data) {
                    next(data);
                });
            }
        });

        
      });

      app.controller('contactController', function($scope) {
        $scope.comments = [
              {
                'comment'   : 'This is comments',
                'full_name' : 'Test User',
                'email'     : 'test@t.com'
              }
          ];

          // function to submit the form after all validation has occurred            
          $scope.submitForm = function() {
            newComment = [];
              // check to make sure the form is completely valid
              if ($scope.contactForm.$valid) {
                newComment = {  'comment' : $scope.comment, 
                                'full_name' : $scope.full_name , 
                                'email' : $scope.email 
                              };
              }
              $scope.comments.push(newComment);
          };          
      });

