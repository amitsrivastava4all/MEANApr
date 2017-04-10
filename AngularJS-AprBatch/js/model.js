// Factory Contains the Logic
// And Factory Always return the object
// Factory Compute or Fetch Something and wrap everything in object
app.factory("finderFactory",function($http,$q){
	var object = {};
	object.callServer = function(hostName){
		var defered = $q.defer();
		var url ="http://freegeoip.net/json/"+hostName;
		$http.get(url).then(success,fail);
		function success(data){
			defered.resolve(data);
		}
		function fail(error){
			defered.reject(error);
		}
		return defered.promise;
		//return "I Call Server";
	}
	return object;
})