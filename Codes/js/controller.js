//$ things are angular define things
// $scope is a glue b/w view and controller
// $scope is a predefine object (service)
app.controller("finderCtrl",function($scope,finderFactory){
	$scope.findNow=function(){
		var hostName = $scope.hostname;
		console.log("I am Calling Factory");
	var promise =  finderFactory.callServer(hostName,$scope);
	for(var i = 1; i<=10 ; i++){
	console.log("Loop is Going On ..."+i);	
	}
		$scope.done = "Loop is Done....."+promise;
		promise.then(function(data){
			console.log(data);
			$scope.result = "I.P is "+data.data.ip+" Country is "+data.data.country_name+" Time Zone is "+data.data.time_zone; 
		},function(error){
			$scope.result = error;
		});
	}
})