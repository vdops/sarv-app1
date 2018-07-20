var mongoose = require('mongoose');
var Careers = mongoose.model('Careers');

//Post a career application 
module.exports.careersApply = function (req, res) {
    var firstName = req.body.firstName;
    var lastName = req.body.lastName;
    var qualification = req.body.qualification; 
    var experience = req.body.experience;
    var specialisation = req.body.specialisation;
    var residingCountry = req.body.residingCountry;
    var phone = req.body.phone;
    var email = req.body.email;
    var params = { 
        firstName : firstName,
        lastName : lastName, 
        qualification : qualification,
        experience : experience, 
        specialisation : specialisation,
        residingCountry : residingCountry,
        phone : phone, 
        email : email
    };
    
    Careers
        .create(params, function(err, careers){
        if(err) {
            console.log(err);
            res
                .status(400)
                .json(err);
        }
        else { 
            
            console.log("Application Posted", careers);
            res
                .status(201)
                .json({success: true, careers: careers});
        }            
    });
}
