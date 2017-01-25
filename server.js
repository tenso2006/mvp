//var db = require('./db/index.js');
var mongoose  = require('mongoose');

mongoose.connect('mongodb://localhost/puppy');

var db = mongoose.connection;

var puppySchema = mongoose.Schema({
  userName: String,
  email: String,
  image: String,
  description: String
});

var Puppies = mongoose.model('Puppies', puppySchema);

// var puppies = require('./data.json');
// Puppies.insertMany(puppies, function (err, puppy){
//     if (err) {
//       console.error('Error in inserting many puppies ',err);
//     } else {
//       console.log('Inserted all puppies to the db');
//     }
//   });

// var newPuppy = new Puppies({
//   userName: 'Bolo',
//   email: 'bplo@gmail.com',
//   image: 'bolo image',
//   description: 'bolo is new puppy in town'
// });

// newPuppy.save(function (err, newPuppy) {
//   if (err) return console.error(err);
//   console.log('newPuppy is :', newPuppy);
// });


db.on('error', console.error.bind(console, 'connection error for mongoose puppy db'));

db.once('open', function () {

  console.log('connected to puppy db');
});

//console.log('db from app.js ', db);
//module.exports = db;
//module.exports = Puppies;

//-------------above is mongoose connection

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

app.get('/adopt', function (req, res) {
  console.log('got a get request from /adopt');
  //console.log('db is ', db);
  // db.collection.find(req.query, function (err, puppies){
  //   if (err) {
  //     return console.error('error in finding puppies in db table', err);
  //   } else {
  //     res.status(200).send(puppies);
  //   }
  // });
  Puppies.find({}, function (err, data) {
    if(err) {
        console.error(err);
    } else {
        // console.log(resp);
        res.send(data);
    }
  });
});


app.post('/exchange', function (req, res) {
  console.log('got a POST request from /exchange');
  var puppy = new Puppies({
    userName: req.body.userName,
    email: req.body.email,
    image: req.body.image,
    description: req.body.description
  });

  puppy.save();
  res.send('saved');
  // db.Puppies.save(function (err, puppies){
  //   if (err) {
  //     return console.error('error in posting puppies in db table', err);
  //   } else {
  //     console.log('req.body inside post is :', req.body);
  //     var newPuppy = new Puppies(req.body);
  //     res.status(201).send(newPuppy);
  //   }
  // });
});

// app.get('*', function (req, res) {
//   res.redirect('/');
//   //res.sendFile('./client/index.html');
// });


var port = process.env.PORT || 4000;

app.listen(4000, function () {
  console.log('Express app listening on port:', port);
});