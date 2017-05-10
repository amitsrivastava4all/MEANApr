var dbOperations={
	userList:[{userid:"ram",password:"121"},{userid:"tom",password:"222"}],
	findUser:function(userid,password){
		return this.userList.filter(function(userObject){
			return userObject.userid ==userid && userObject.password == password;
		})
	}
}
module.exports = dbOperations;