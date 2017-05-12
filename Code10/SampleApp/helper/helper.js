function validateUser(userid){
	// User id can't be blank
	// userid must be of 3 chars
	var validateObject = require("../utils/commonutil");
	return validateObject.isNotBlank(userid) && validateObject.isCorrectSize(userid,3);
	
}
function validatePassword(password){
	// password can't be blank
	// password must be of 8 chars
	var validateObject = require("../utils/commonutil");
	return validateObject.isNotBlank(password) && validateObject.isCorrectSize(password,3);
}

function authUser(userid,password){
	if(validateUser(userid) && validatePassword(password)){
		
		//return "User is Valid";
		// Call DB
		var dbOperations = require("../db/db");
		var result = dbOperations.findUser(userid,password);
		if(result && result.length>0){
			return "Welcome "+userid;
		}
		else{
			return "invalid userid or password"
		}
	}
	else{
		return "Userid or Password Validation Fails...";
	}
	
	
}

function addNewUser(userid, password){
	var db = require("../db/db");
	return db.addUser(userid,password);
	
}

var helperObject ={
	
	authenticateUser:authUser,
	addUser:addNewUser
}

module.exports=helperObject;