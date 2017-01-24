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


var newPuppy = new Puppies({
  userName: 'Bolo',
  email: 'bplo@gmail.com',
  image: 'bolo image',
  description: 'bolo is new puppy in town'
});

newPuppy.save(function (err, newPuppy) {
  if (err) return console.error(err);
  console.log('newPuppy is :', newPuppy);
});

db.on('error', console.error.bind(console, 'connection error for mongoose puppy db'));

db.once('open', function () {

  console.log('connected to puppy db');
});

module.exports = db;
module.exports = Puppies;

