const express = require("express");
var bodyParser = require('body-parser');
const app = express();
app.use(express.static("public")); // serving client side files
// this  is used to add the middleware in app
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.post("/login",function(request,response){
	//console.log(request);
	//var uid = request.query.userid;  // Get 
	//var pwd = request.query.pwd;
	var uid = request.body.userid;
	var pwd = request.body.pwd;
	if(uid==pwd){
	response.send("welcome "+uid);
	}
	else{
		response.send("Invalid Userid or Password");
	}
})
app.listen(1234,function(){
	console.log("Server Start....");
})

