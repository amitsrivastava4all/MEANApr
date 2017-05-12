var validateObject = {
 isNotBlank:function(str){
	return str?true:false;
},
 isCorrectSize:function(str,len){
	return str.length >=len?true:false
}
}
module.exports = validateObject;
