var myModule = angular.module('myModule', []);

function ControllerOne($scope, $rootScope, $http, $window) {
    
	$scope.userEmail;
	$scope.message;

    $scope.verifyAndSubmit = function(userEmail) {
		
		 var requestData = $http({
              method: 'POST',
              url: 'http://104.198.18.250/api/tableau/findUserIDP',
              data: {"username": userEmail},
              headers: {
                'content-type': 'application/json'
              }
            });
            return (requestData.then(function(response) {
				if(response.data['NA Response'] === "https://tableau-cloud.login.covapp.io/login.do?host=https://tableau-cloud.portal.covapp.io"){
					//$scope.message ="Please check your email.";
					$window.open ("https://tableau-cloud.portal.covapp.io", "_blank");
				}
				else if(response.data['ACME Response'] === "https://tableau2-acme.login.eu1.covapp.io/login.do?host=https://tableau-cloud.portal.covapp.io"){
					$window.open("https://tableau2-acme.portal.eu1.covapp.io/", "_blank");
				} 
                else {
					$scope.message ="Email not registered with us.";
				}
            }));	

    };  
	
 
	$scope.cancel=function(){
		$scope.userEmail="";
		$scope.message ="";
	}
}

ControllerOne.$inject = ['$scope', '$rootScope', '$http', '$window'];

