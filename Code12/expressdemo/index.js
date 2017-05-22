const express = require("express");
var bodyParser = require('body-parser');
var getPath = require("./utils");
const app = express();
app.use(express.static("public")); // serving client side files
// this  is used to add the middleware in app
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'ejs');  // Using EJS as a Templating Engine
app.set('views',__dirname+'/pages');
// parse application/json
app.use(bodyParser.json());
app.get("/login",function(request,response){
	response.sendFile(getPath("/public/login.html"));
});
app.post("/login",function(request,response){
	//console.log(request);
	//var uid = request.query.userid;  // Get 
	//var pwd = request.query.pwd;
	var uid = request.body.userid;
	var pwd = request.body.pwd;
	if(uid==pwd){
		
	response.sendFile(getPath("/public/welcome.html"));
		const products = require("./products");
		response.render("welcomeuser",{"products":products,"user":uid});
		//response.send("welcome "+uid);
	}
	else{
		response.send("Invalid Userid or Password");
	}
})
app.listen(1234,function(){
	console.log("Server Start....");
})

