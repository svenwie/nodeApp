var http = require('http');
var fs = require('fs');

// hier entsteht der server. er hat ein req und ein res objekt.
var server = http.createServer(function(req, res){
  // hier kommt die anfrage des browsers an
  // an dieser stelle ist es noch nicht von bedeutung
  console.log('anfrage wurde durchgeführt: ' + req.url);
  // hier wird ein OK gegeben und der typ der info festgelegt
  res.writeHead(200, {'Content-Type': 'application/json'});

  var myObj = {
    name: 'Jürgen',
    job: 'Maurer',
    age: 49
  };
  res.end(JSON.stringify(myObj));

});

// hier wird dem server gesagt wohin er höhren soll
server.listen(3000, '127.0.0.1');
console.log('server lauscht auf port 3000');
