const Robot = require('./bot.js');
let express = require('express');
let app = express();

let bot = new Robot();
bot.start();


app.use(express.static('./'));

app.post('/forward', function (req, res) {
  res.sendStatus(200);
  if (bot.vide() >10){
    bot.moveForward();
  }
});

app.post('/backward', function (req, res) {
  res.sendStatus(200);
  bot.moveBack();

});
app.post('/left', function (req, res) {
  res.sendStatus(200);
  bot.moveLeft();

});
app.post('/right', function (req, res) {
  res.sendStatus(200);
  bot.moveRight();
});
app.post('/vide', function (req, res) {
  res.sendStatus(200);
  bot.vide();
});



app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});