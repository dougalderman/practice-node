var express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    cors = require('cors');

var userCtrl = require('./controllers/userCtrl');

// initialize app
var app = express();

app.use(bodyParser.json());
app.use(cors());

// app.use(express.static(__dirname + '/../public')); // Used for front end tie in

var mongo_uri = 'mongodb://localhost:27017/users';

mongoose.connect(mongo_uri);

mongoose.connection.once('open', function() {
    console.log('Successfully connected to mongodb');
})

//set up endpoints
app.get('/users', userCtrl.read);
app.post('/users', userCtrl.create);
app.put('/users/:id', userCtrl.update);
app.delete('/users/:id', userCtrl.delete)

//set up port to lisen to
var port = 3000;
app.listen(port, function() {
    console.log('listening on port ' + port);
})
