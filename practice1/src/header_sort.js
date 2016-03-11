var myApp = angular.module("headerApp", []);
var myController = function($scope) {
	var employees = [
	       {name:"Priyabrat",dob: new Date("November 22,1980"),gender:"Male",salary:"8.0"},
	       {name:"Ram",dob: new Date("December 2,1984"),gender:"Male",salary:"4.0"},
	       {name:"Shyam",dob: new Date("January 3,1989"),gender:"Male",salary:"7.0"},
	       {name:"Raghav",dob: new Date("March 4,1990"),gender:"Male",salary:"5.0"},
	       {name:"Rabi",dob: new Date("May 20,1991"),gender:"Male",salary:"9.0"}
	];
	$scope.employees = employees;
	$scope.sortColumn = "name";
	$scope.reverseSort = false;
	$scope.sortData = function (column) {
		$scope.reverseSort = ($scope.sortColumn == column) ? !$scope.reverseSort : false;
		$scope.sortColumn = column;
	};
	
	$scope.getSortClass = function(column) {
		if($scope.sortColumn == column){
			return $scope.reverseSort ? "arrow-up":"arrow-down";
		}
		
		return "";
	};
};
myApp.controller("headerController", myController);