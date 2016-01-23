var express  = require('express');
var app      = express();
var port  	 = 3000;

app.configure(function() {
	app.use(express.static(__dirname + '/app'));
	app.use(express.logger('dev'));
	app.use(express.bodyParser());
	app.use(express.methodOverride());
});

app.get('/', function(req,res) {
  res.sendfile(__dirname + '/app/index.html');
});

app.listen(port);
console.log("App listening on port " + port);
