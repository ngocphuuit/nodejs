/**
 * Created by NoPu on 7/8/14.
 */
var http = require('http');
var server = http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type': 'Text/html'});
    res.write('hello nodejs');
    res.end();
});
console.log('connecting ......');
server.listen(4567);
