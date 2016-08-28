var express = require("express");
var app = express();

var serv = require("http").Server(app);
app.get('/', function(req,res){
	res.sendFile(__dirname+'/client/index.html');
});
app.use('/client',express.static(__dirname + '/client'));
serv.listen(process.env.PORT || 3000);
	console.log("Server Started on port 3000");
