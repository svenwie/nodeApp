var http = require('http');

var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/text.txt', 'utf8');

// console.log("eins");

myReadStream.on('data', function(chunk){
  console.log("new chunk detected:----------------------- ");
  console.log(chunk);
  // console.log("drei");
});

// console.log("zwei");
