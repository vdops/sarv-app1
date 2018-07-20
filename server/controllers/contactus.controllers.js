var mongoose = require('mongoose');
var ContactUs = mongoose.model('ContactUs');

//Post a career application 
module.exports.contactUs = function (req, res) {
    var name = req.body.name;
    var email = req.body.email;
    var message = req.body.message;
    var params = { 
        name : name,
        message : message, 
        email : email
    };
    
    ContactUs
        .create(params, function(err, contact){
        if(err) {
            console.log(err);
            res
                .status(400)
                .json(err);
        }
        else { 
            
            console.log("Application Posted", contact);
            res
                .status(201)
                .json({success: true, contact: contact});
        }            
    });
}
