var http = require('http');
var fs = require('fs');

// hier entsteht der server. er hat ein req und ein res objekt.
var server = http.createServer(function(req, res){
  // hier kommt die anfrage des browsers an
  console.log('anfrage wurde durchgeführt: ' + req.url);
  // hier wird ein OK gegeben und der typ der info festgelegt
  res.writeHead(200, {'Content-Type': 'text/plain'});
  // hier wird gelesen und der datentyp festgelegt
  var myReadStream = fs.createReadStream(__dirname + '/text.txt', 'utf8');
  // hier wird das gelesene in die res gepiped
  myReadStream.pipe(res);
});

// hier wird dem server gesagt wohin er höhren soll
server.listen(3000, '127.0.0.1');
console.log('server lauscht auf port 3000');
