const express = require('express')
const YouTube = require('youtube-node')
const cors = require('cors')
const app = express()
const youTube = new YouTube();
var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

app.use(cors())


var url = 'mongodb://localhost:27017/myproject';
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server");
  db.collection('dataBase', {strict:true}, function(err, collection) {});

});


//Login
app.post('/login', function(req, res){
var email = req.query.email;
var password = req.query.password;
var cursor;
// Use connect method to connect to the Server 
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  var collection = db.collection('dataBase');
//   cursor = db.collection('dataBase').findOne({ "email":email});
var user_credentials = {'email':email ,'password' : password};
   collection.find(user_credentials, function(err, result) {
       console.log(result);
     res.send(result);
     
 });
  db.close();
});


});

//Register
app.post('/register', function(req, res){
var email = req.query.email;
var password = req.query.password;
// Use connect method to connect to the Server 
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
var collection = db.collection('dataBase');
  var user_credentials = [{'email':email},{'password' : password}];
 collection.insert(user_credentials, {w:1}, function(err, result) {
     res.send(result);
 });
});
})

//Search Api
app.get('/search', function (req, res) {
    var name = req.query.name;
    youTube.setKey('AIzaSyCG4t4VYwaaqFGwsWyPC-3KatMJH1d57P0');
    // res.header 'Access-Control-Allow-Origin' , '*'
    youTube.search(name, 30, function (error, result) {
        if (error) {
            res.send(error);
        } else {
            var Data = result.items;
            var array = [];
            var video_ids = Data.map(function(each){
                return each.id.videoId;          
            });
            console.log(result)
            res.send(video_ids);
        }
    });
});

app.listen(3001, function () {
    console.log('Example app listening on port 3001!')
})