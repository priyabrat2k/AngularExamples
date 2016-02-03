var myApp = angular
	.module("myAppImgLoad", [])
	.controller("myControllerImgLoad", function($scope) {
		var platform = {
			name: "Android OS",
			image: "images/android.png",
			owner: "Google Inc."
		};
		$scope.platform = platform;
	});