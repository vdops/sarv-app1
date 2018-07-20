var mongoose = require('mongoose');
var AsktheExpert = mongoose.model('AsktheExpert');

//Post a question 
module.exports.asktheExpert = function (req, res) {
    var firstName = req.body.firstName;
    var lastName = req.body.lastName;
    var category = req.body.category; 
    var message = req.body.message;
    var email = req.body.email;
    var params = { 
        firstName : firstName,
        lastName : lastName, 
        category : category,
        message : message, 
        email : email
    };
    
    AsktheExpert
        .create(params, function(err, ate){
        if(err) {
            console.log(err);
            res
                .status(400)
                .json(err);
        }
        else { 
            
            console.log("Question Posted", ate);
            res
                .status(201)
                .json({success: true, ate: ate});
        }            
    });
}
