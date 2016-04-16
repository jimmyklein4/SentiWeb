
var app = angular.module("sentichatApp", ['ngRoute', 'luegg.directives']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
      	templateUrl: './views/app.html',
        controller: 'AppController'
      })
      .otherwise({
        redirectTo: '/'
      });
}]);

app.controller('AppController', function($scope, $http) {
	$scope.$on('$viewContentLoaded', function() {
    	//init stuff on page load
	});
});
