///**
//* Created by NoPu on 7/8/14.
//*/
//var handler = function(req, res) {
//    fs.readFile('./page.html', function (err, data) {
//        if(err) throw err;
//        res.writeHead(200);
//        res.end(data);
//    });
//}
//var app = require('http').createServer(handler);
//var io = require('socket.io').listen(app);
//var fs = require('fs');
//var Moniker = require('moniker');
//var port = 3250;
//
//
//
//io.sockets.on('connection', function (socket) {
//    var user = addUser();
//    updateWidth();
//    socket.emit("welcome", user);
//    socket.on('disconnect', function () {
//        removeUser(user);
//    });
//    socket.on("click", function() {
//        currentWidth += 1;
//        user.clicks += 1;
//        if(currentWidth == winWidth) {
//            currentWidth = initialWidth;
//            io.sockets.emit("win", { message: "<strong>" + user.name + "</strong> rocks!" });
//        }
//        updateWidth();
//        updateUsers();
//    });
//});
//
//var initialWidth = 20;
//var currentWidth = initialWidth;
//var winWidth = 150;
//var users = [];
//
//var addUser = function() {
//    var user = {
//        name: Moniker.choose(),
//        clicks: 0
//    }
//    users.push(user);
//    updateUsers();
//    return user;
//}
//var removeUser = function(user) {
//    for(var i=0; i<users.length; i++) {
//        if(user.name === users[i].name) {
//            users.splice(i, 1);
//            updateUsers();
//            return;
//        }
//    }
//}
//var updateUsers = function() {
//    var str = '';
//    for(var i=0; i<users.length; i++) {
//        var user = users[i];
//        str += user.name + ' <small>(' + user.clicks + ' clicks)</small>';
//    }
//    io.sockets.emit("users", { users: str });
//}
//var updateWidth = function() {
//    io.sockets.emit("update", { currentWidth: currentWidth });
//}
//
//app.listen(port);
var express = require("express");
var app = express();
var port = 3700;
app.set('views', __dirname + '/view');
app.set('view engine', "jade");
app.engine('jade', require('jade').__express);
app.get("/", function(req, res){
    res.render("page");
});
app.use(express.static(__dirname + '/public'));
var io = require('socket.io').listen(app.listen(port));
console.log("Listening on port " + port);