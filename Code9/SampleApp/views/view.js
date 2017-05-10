console.log("this is a View Screen ");
var userid = "ram";
var password = "545";
var helperObject = require("../helper/helper");
//console.log("Helper Object is ",helperObject);
var msg = helperObject.authenticateUser(userid,password);
console.log("Message is ",msg);