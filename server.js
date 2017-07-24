//Server Related Imports
const express = require('express')
const YouTube = require('youtube-node')
const cors = require('cors')
const app = express()
const youTube = new YouTube();
const mongoose = require('mongoose');
var Schema= mongoose.Schema;
var assert = require('assert');
var session = require('express-session');
var bodyParser = require('body-parser')
var url = 'mongodb://localhost:27017/myproject';



//  ************ DatBase **************
mongoose.connect(url);

var videoSchema = new Schema({
    url: String,
    image: String
});
var userDataSchema = new Schema({
    email : String,
    password: String,
});

var userData = mongoose.model('userData',userDataSchema);
var videoData = mongoose.model('videoData',videoSchema);


// Handling Cross origin Req
app.use(cors())

// To get data from post req
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


//  ************ Login User **************
app.post('/login', function (req, res) {
    var user_credentials = {
            'email': req.body.email,
            'password': req.body.password
        };
    userData.findOne(user_credentials, 'email', function(err, result){
        if(err) return handleError(err);
        result != undefined ? res.redirect(302, 'https:google.com') : res.send(false);              
    });

})


//  ************ Register User **************
app.post('/register', function (req, res) {
    var user_credentials = {
            'email': req.body.email,
            'password': req.body.password
        };
        console.log(user_credentials);
    var data = new userData(user_credentials);
    data.save();

})


// ************** Save Data *************
app.post('/saveVid', function (req, res) {
    var video_data = {
            'url': req.body.url,
            'image': req.body.image
    };
    console.log(video_data);
    var data = new videoData(video_data);
    data.save();

})

// ************** Get Data *************
app.get('/getVid', function (req, res) {
  videoData.find(function(err, results){
      res.send(results);
  });

})

// ************** Delete Data *************
app.post('/deleteVid', function (req, res) {
    var id = req.body.id;
  videoData.remove({_id: id},function(err){
        !err ? res.send(true) : res.send(false)
  });

})

//  ************ Search Youtube **************
app.get('/search', function (req, res) {
    var name = req.query.name;
    youTube.setKey('AIzaSyCG4t4VYwaaqFGwsWyPC-3KatMJH1d57P0');
    youTube.search(name, 30, function (error, result) {
        if (error) {
            res.send(error);
        } else {
            var Data = result.items;
            var video_data = Data.map(function (each) {
                if(each.id.kind.indexOf('video') > -1){
                var data = {
                    url: each.id.videoId,
                    image : each.snippet.thumbnails.medium.url
                }
                return (data);
                }
            });
            var filterData = video_data.filter(function(each){
                if(each != undefined) {
                    var data = {
                    url: each.url,
                    image : each.image
                }
                    return (data);
                }
            });
            res.send(filterData);
        }
    });
});


// Server Port
app.listen(3001, function () {
    console.log('Example app listening on port 3001!')
})