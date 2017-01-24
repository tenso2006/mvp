var server = require('./../server.js');
var db = require('./../db/index.js');
var puppies = require('./../data.json');


var dummyPuppyData = function () {
  db.insertMany(puppies, function (err, puppy){
    if (err) {
      console.error('Error in inserting many puppies ',err);
    } else {
      console.log('Inserted all puppies to the db');
    }
  });
};

dummyPuppyData();
