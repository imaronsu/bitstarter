var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

var infile = "index.html";
var contents = new Buffer(fs.readFileSync(infile, 'utf8'));

app.get('/', function(request, response) {
  response.send(contents.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
