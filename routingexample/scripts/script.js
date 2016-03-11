var app = angular
			.module("demoApp",["ngRoute"])
			.config(function($routeProvider) {
				$routeProvider
					.when("/home", {
						templateUrl: "templetes/home.html",
						controller: "homeController"
					})
					.when("/courses", {
						templateUrl: "templetes/cources.html",
						controller: "courcesController"
					})
					.when("/students", {
						templateUrl: "templetes/students.html",
						controller: "studentsController"
					})
					.otherwise({
						redirectTo:"/home"
					});
			})
			.controller("homeController", function($scope) {
				$scope.message = "Home Page (By Priyabrat)";
			})
			.controller("courcesController", function($scope) {
				$scope.courses = ["Java","C","C++","Android"];
			}).controller("studentsController", function($scope) {
				$scope.students = ["Ram","Lakshman","Shyam","John"];
			});