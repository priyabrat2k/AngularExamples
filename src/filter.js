angular
	.module("myFIlterApp",[])
	.controller("myFilterController",function($scope){
		var student = {
			firstName: "Priyabrat",
			lastName:"Padhy",
			fees:450,
			subjects: [
			   {name:"Maths",mark:200},
			   {name:"Geography",mark:300},
			   {name:"Geometry",mark:400}
			],
			getFullName : function(){
				var stu = student;
				return stu.firstName+" "+stu.lastName
			}
		};
		$scope.student = student;
	});