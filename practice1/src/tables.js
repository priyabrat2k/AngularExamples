var myTableApp = angular.module("myTableApp", []).controller(
		"myTableController",
		function($scope) {
			$scope.log = "This is a Log Message";
			$scope.student = {
				firstName : "Priyabrat",
				lastName : "Padhy",
				fees : 500,
				subjects : [ {
					name : 'Physics',
					marks : 70
				}, {
					name : 'Chemistry',
					marks : 80
				}, {
					name : 'Math',
					marks : 65
				}, {
					name : 'English',
					marks : 75
				}, {
					name : 'Hindi',
					marks : 67
				} ],

				getFullName : function() {
					var studentObject;
					studentObject = $scope.student;
					return studentObject.firstName + " "+ studentObject.lastName;
				}
			};
		});