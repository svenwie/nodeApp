var http = require('http');

var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/text.txt', 'utf8');
var myWriteStream = fs.createWriteStream(__dirname + '/geschrieben.txt');
// console.log("eins");

myReadStream.on('data', function(chunk){
  console.log("new chunk detected:----------------------- ");
  // console.log(chunk);
  // console.log("drei");
  myWriteStream.write(chunk);
});

// console.log("zwei");
