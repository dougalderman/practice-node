var User = require('./../models/user');

module.exports = {
    create: function(req, res) {
        var newUser = new User(req.body);
        newUser.save(function(err, result) {  // used for manipulating data before saving it
            // handle errors
            if (err) {
                res.status(500).send(err);
            } else {
                res.send(result);
            }
        });
        // alternative 
//        User.create(req.body, function() { // If you don't need to manipulate data before saving it
//            // handle errors
//            if (err) {
//                res.status(500).send(err);
//            } else {
//                res.send(result);
//            }
//        })
    },
    read: function(req, res) {
        User.find(req.query, function(err, result) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.send(result);
            }
        })
    },
    
    update: function(req, res) {
        User.findByIdAndUpdate(req.params.id, req.body, function(err, result) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.send(result);
            }
        })
    },
    delete: function(req, res) {
         User.findByIdAndRemove(req.params.id, function(err, result) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.send(result);
            }
        });
    }
    
};