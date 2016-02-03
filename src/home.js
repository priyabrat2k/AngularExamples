var myApp = angular.module("myApp",[]);
var myController = function($scope){
	var emp = {
		name: "Priyabrat",
		address: "Berhampur,Odisha,India",
		state: "Odisha"
	};
	
	$scope.message = "This is a Demo Message";
	$scope.emp = emp;
};
myApp.controller("myController", myController);