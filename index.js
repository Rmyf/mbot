const Robot = require('./bot.js');
let express = require('express');
let app = express();

let bot = new Robot();
bot.start();
app.get('/forward', function(req, res) {

    bot.moveForward();

});
app.get('/', function(req, res) {
    res.sendFile(__dirname + "/index.html");
});
app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});


app.get('/backward', function(req, res) {

    bot.moveBack();

});
app.get('/left', function(req, res) {

    bot.moveLeft();

});
app.get('/right', function(req, res) {

    bot.moveRight();

});