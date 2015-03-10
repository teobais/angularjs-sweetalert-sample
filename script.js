function validationCtrl($scope) {
   var validUsername = "Thodoris Bais";
   var validEmail = "thodoris.bais@gmail.com";
   
   $scope.reset = function(){
		$scope.username = validUsername;
		$scope.email = validEmail;
   }   
   
   $scope.checkData = function() {
		if ($scope.username != validUsername || $scope.email != validEmail) {
			swal("No", "The data you provided are wrong!", "error");
		} else {
			sweetAlert("Yes!", "This is what we 're looking for!", "success");
		}
	}
}