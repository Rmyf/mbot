
const Robot = require('./bot.js');
let express = require('express');
let app = express();

let bot = new Robot();
bot.start();
app.get('/forward', function (req, res) {
  res.send('Hello World!');
  bot.moveForward();

});
app.get('/', function (req, res) {
  res.sendFile(__dirname + "/index.html");
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});