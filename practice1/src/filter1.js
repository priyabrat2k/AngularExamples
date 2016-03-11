angular.module("myFilterApp1", []).controller(
		"myFilterController1", function($scope) {
			var log = "Log Message";
			$scope.log = log;
			var employees = [ 
			    {name:"Ram",dob: new Date("May 30,1991"),gender:"Male",salary:250000} ,
			    {name:"Shyam",dob: new Date("April 3,1991"),gender:"Male",salary:50000} ,
			    {name:"David",dob: new Date("December 30,1991"),gender:"Male",salary:450000},
			    {name:"Govind",dob: new Date("March 10,1991"),gender:"Male",salary:550000},
			    {name:"Mukund",dob: new Date("August 23,1991"),gender:"Male",salary:650000},
			    {name:"Darshan",dob: new Date("October 1,1991"),gender:"Male",salary:750000}
			 ];
			$scope.employees = employees;
			$scope.rowLimit = 2;
		});