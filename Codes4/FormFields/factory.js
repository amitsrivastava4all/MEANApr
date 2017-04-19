app2.factory("itemfactory",function(){
	var itemOperations = {
		itemList :[],
		id : 1,
		getId:function(){
			return this.id;
		},
		countDeleted:function(){
			return this.itemList.filter(function(itemObject){
				return itemObject.isDeleted;
			}).length;
			
		},
		addItem:function(itemObject){
			//itemObject.id = this.id;
			
			this.itemList.push(itemObject);
		this.id++;
			console.log("Record Added ",this.itemList);
		},
		getItems:function(){
			return this.itemList;
		}
	};
	
	return itemOperations;
})

// Function Constructor
function Item(id,name,desc,price,qty,url){
	this.id = id;
	this.name = name;
	this.desc = desc;
	this.price =price;
	this.qty = qty;
	this.url = url;
	this.isDeleted = false;
	this.toggleDelete=function(){
		 this.isDeleted = !this.isDeleted;
		console.log("After Toggle "+this.id +" Flag "+this.isDeleted);
	}
}