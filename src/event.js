var myApp = angular
	.module("myAppEvent", [])
	.controller("myControllerEvent", function($scope) {
		var technologies = [
		           {name:"Java",likes:0,dislikes:0},
		           {name:"Android",likes:0,dislikes:0},
		           {name:"PHP",likes:0,dislikes:0},
		           {name:"AngularJS",likes:0,dislikes:0}
		];
		$scope.technologies = technologies;
		
		$scope.incrementLikes = function(technology){
			technology.likes ++;
		}
		
		$scope.incrementDislikes = function(technology){
			technology.dislikes ++;
		}
		var logMsg = "This is a log message";
		$scope.logMsg = logMsg;
	});