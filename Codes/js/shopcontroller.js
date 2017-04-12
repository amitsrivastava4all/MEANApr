app.controller("shopctrl",function($scope,shopfactory){
	$scope.loadProducts=function(){
		var promise = shopfactory.callServer();
		console.log("Something else....");
		promise.then(function(data){
			$scope.result= data;
		},function(error){
			$scope.err = error;
		})
	}
})