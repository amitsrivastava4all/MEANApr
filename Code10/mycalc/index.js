var calcObject = {
	add:function(x,y){
		var t = require("./index2");
		t();
		return x + y;
	},
	subtract:function(x,y){
		return x - y;
	}
	
}
module.exports = calcObject;