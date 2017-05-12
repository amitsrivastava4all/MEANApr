console.log("this is a View Screen ");
var userid = "tom";
var password = "111";
var helperObject = require("../helper/helper");
//console.log("Helper Object is ",helperObject);
console.log("Calling Add...");
var result = helperObject.addUser(userid,password);
console.log(result);
var msg = helperObject.authenticateUser(userid,password);
console.log("Message is ",msg);

