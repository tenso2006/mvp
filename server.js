var db = require('./db/index.js');

var express = require('express');

var app = express();
var bodyParser = require('body-parser');

//get all data/stuff of the body in POST parameters
app.use(bodyParser.json());


app.use(bodyParser.urlencoded({extended: false}));

//use and serve from client as the default static page
app.use(express.static(__dirname + '/client'));



/* ---------Routes -----------------*/
app.get('/home', function (req, res) {
  res.redirect('/');
  //res.sendFile('./client/index.html');
  //res.send('hello all there');
});

// app.get('/adopt', function (req, res) {
//   db.Puppies.find(req.query, function (err, puppies){
//     if (err) {
//       return console.error('error in finding puppies in db table', err);
//     } else {
//       res.status(200).send(puppies);
//     }
//   });
// });

// app.post('/exchange', function (req, res) {
//   db.Puppies.save(function (err, puppies){
//     if (err) {
//       return console.error('error in posting puppies in db table', err);
//     } else {
//       console.log('req.body inside post is :', req.body);
//       var newPuppy = new Puppies(req.body);
//       res.status(201).send(newPuppy);
//     }
//   });
// });

app.get('*', function (req, res) {
  res.sendFile('./client/index.html');
});


var port = process.env.PORT || 4000;

app.listen(4000, function () {
  console.log('Express app listening on port:', port);
});