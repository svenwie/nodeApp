var http = require('http');
var fs = require('fs');

// hier entsteht der server. er hat ein req und ein res objekt.
var server = http.createServer(function(req, res){
  // hier kommt die anfrage des browsers an
  // an dieser stelle ist es noch nicht von bedeutung
  console.log('anfrage wurde durchgeführt: ' + req.url);
  if(req.url === '/home' || req.url === '/' || req.url === '/index'){
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/index.html').pipe(res);
  }else if (req.url === '/contact'){
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/contact.html').pipe(res);
  }else if (req.url === '/api/dev'){
    res.writeHead(200, {'Content-Type': 'application/json'});
    var dev = [{name: 'db1', cap: '3TB'}, {name: 'db2', cap: '12TB'}];
    res.end(JSON.stringify(dev));
  }else{
    res.writeHead(404, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/uups.html').pipe(res);
  };

});

// hier wird dem server gesagt wohin er höhren soll
server.listen(3000, '127.0.0.1');
console.log('server gestartet... lauscht auf port 3000');
