var app = angular.module("demoApp",["ngRoute"]);

app.config(function($routeProvider,$locationProvider){
	$routeProvider
		.when("/login",{
			templateUrl: "views/login.html",
			controller: "loginController"
		})
		.when("/dashboard",{
			templateUrl: "views/dashboard.html",
			controller: "dashboardController"
		})
		.otherwise({
			redirectTo: "/login"
		});
	//$locationProvider.html5Mode(true);
});

app.controller("loginController", function($scope,$location) {
	$scope.msg = "Login";
	$scope.submitLogin = function(){
		var userName = $scope.username;
		var userPass = $scope.password;
		if(userName == "root" && userPass == "admin"){
			$location.path("/dashboard");
		}else {
			alert("Wrong Username or password");
		}
	};
});
app.controller("dashboardController", function($scope) {
	$scope.msg = "This is Dash Board Page";
});