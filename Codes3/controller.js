app.controller("itemctrl",function($scope,itemfactory){
	$scope.itemObject = {};
	console.log("Before ",$scope.itemObject);
	//itemObject.id = 1001;
	$scope.add=function(){
		var itemObject = new Item(itemfactory.getId(),$scope.itemObject.name,$scope.itemObject.desc,$scope.itemObject.price,$scope.itemObject.qt,$scope.itemObject.img);
		itemfactory.addItem(itemObject);
		$scope.itemArray=itemfactory.getItems();					
		//console.log("Item Object is ",$scope.itemObject);
	}
	$scope.countDeleted = function(){
		return itemfactory.countDeleted();
	}
	
})