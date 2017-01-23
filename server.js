var express = require('express');

var app = express();


//var port = process.env.port || 4000;


app.get('/home', function (req, res) {
  res.send('hello all there');
});

app.listen(4000, function () {
  console.log('Express app listening on port:', 4000);
});