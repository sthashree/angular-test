
var app = angular.module('myApp', [
              'ngRoute',
							'myApp.driverlist',
							'myApp.studentlist',
  							'myApp.services']);

  app.config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl : 'pages/home.html',
        controller  : 'mainController'
      })
      // route for the about page
      .when('/about', {
          templateUrl : 'pages/about.html',
          controller  : 'aboutController'
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

      app.controller('contactController', function($scope) {
        $scope.comments = [
              {
                'comment' : 'This is comments',
                'name'    : ' Test User',
                'email'   : ' test@t.com'
              }
          ];

              console.log($scope.comments)
          // function to submit the form after all validation has occurred            
          $scope.submitForm = function() {
            newComment = [];
              // check to make sure the form is completely valid
              if ($scope.contactForm.$valid) {
                newComment = {  comment : $scope.comment, 
                                    name : $scope.name , 
                                    email : $scope.email 
                                };
              }
              $scope.comments.push(newComment);

              console.log($scope.comments)

          };

          
      });

app.controller('greetingController', function($scope) {
  $scope.person = {
    name: "Guest"
  };

  app.controller('menuController', function($scope) {

  });
$scope.sayHello = function() {
    $scope.person.greeted = true;
    $scope.person.reply =  'Hi '+$scope.person.name+' . Thank you.';
  }
});

