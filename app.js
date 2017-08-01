var fs = require('fs');
var path = require('path');
var express = require('express');

var app = express();

app.get('/', function (req,res,next) {

	var ip = req.headers['x-forwarded-for'] || 
    req.connection.remoteAddress || 
    req.socket.remoteAddress ||
	req.connection.socket.remoteAddress;


	var lang 	= req.headers['accept-language'].split(',');
	var langStr	= lang[0].toString();


	var software = req.headers['user-agent'].split(') ')[0].split(' (')[1];

	res.end(JSON.stringify({"ipadress":ip, "language":langStr, "software":software}));
});



app.listen(3000, function () {
	console.log("gestartet");
});

