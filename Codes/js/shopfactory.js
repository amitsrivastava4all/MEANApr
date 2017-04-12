app.factory("shopfactory",function($http,$q){
	var object ={};
	object.callServer=function(){
		var defered = $q.defer();
		$http.get(url.serverurl).then(function(data){
			defered.resolve(data);
		},function(error){
			defered.reject(error);
		})
		return defered.promise;
	}
	return object;
})