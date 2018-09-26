var http = require('http');
var fs = require('fs');
var myReadStream = fs.createReadStream(__dirname + '/text.txt', 'utf8');
var myWriteStream = fs.createWriteStream(__dirname + '/geschrieben.txt');

// in diesem Schritt werden die Daten aus der gelesenen Datei
// direkt in die zu schreibende Datei verschoben.
// dies findet mittels der pipe statt. dadurch wird der vorgang
// beschleunigt.
myReadStream.pipe(myWriteStream);

var server = http.createServer(function(req, res){
  console.log('anfrage wurde durchgeführt: ' + req.url);
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hey dude!');
});

server.listen(3000, '127.0.0.1');
console.log('server lauscht auf port 3000');
