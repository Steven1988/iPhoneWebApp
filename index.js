var app = angular.module('iPhoneWebApp', []);


app.controller('myController', function($scope){
	
	// (localStorage.getItem('apps')!==null) ? JSON.parse($scope.saved) :

	$scope.saved = localStorage.getItem('apps');
	$scope.apps = (localStorage.getItem('apps')!==null) ? JSON.parse($scope.saved) : [ 
		{ name: 'Settings', img: [ 'mailicon.png' ]},
		{ name: 'Facebook', img: [ 'mailicon.png' ]},
		{ name: 'Phonebook', img: [ 'mailicon.png' ]},
		{ name: 'Twitter', img: [ 'mailicon.png' ]}
	];
	localStorage.setItem('apps', JSON.stringify($scope.apps));
	
	$scope.addApp = function(){
		$scope.apps.push({name:$scope.dAppName, img:['mailicon.png']});
		$scope.dAppName = '';
		localStorage.setItem('apps', JSON.stringify($scope.apps));
		console.log($scope.dAppName + " added to the apps");
		window.location.href = "index.html";

	}
	
	$scope.showDelete = function(){
		$scope.showX = !$scope.showX;
		// $scope.showX(by.model('clicked')).click();
	}


	$scope.deleteApp = function(item){
		var index = $scope.apps.indexOf(item);
  		$scope.apps.splice(index, 1);
  		localStorage.setItem('apps', JSON.stringify($scope.apps));
  		console.log("Object: " + item.name + " deleted");
	}


});

// var Programs = ["Settings", "Facebook", "Phonebook"];
// var Apps = [		
// 		"Settings": {
// 			name: "Settings";
// 		},
// 		"Facebook": {
// 			name: "Facebook";
// 		},
// 		"Phonebook": {
// 			name: "Phonebook";
// 		}
// ];
// var text = [];
// for (i = 0; i < Apps.length; i++) {
// 	text += "<li>" + Apps[i] + "</li>";
// }
// document.getElementById("demo").innerHTML = text;




// function helloWorld() {
// 	return "Hello World";
// }

// helloWorld();

