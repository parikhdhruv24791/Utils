/*
    This file contains the interaction between databse and server (router). 
    This is a type of controller file.
*/


var config = require('../../config'),
    UserSchema = require("./userSchema");
    
//Create a collection named 'users' which uses userSchema
var User = config.mongoose.model('UserModel', UserSchema.userSchema, 'users');

function FindUser(data, callback) {
    var userName = data.userName;
    //Comment this if you want to match full case/name.
    //This will search the occurance of the string
    var str = new RegExp(userName, "i");
    User.find({
        "userName": str
    }, '', function(err, results) {
        if (err) return config.handleError(err, callback);
        else {
            var rs;
            if (results && results.length > 0) {
                rs = {
                    "status": "success",
                    "results": results
                };
            } else {
                rs = {
                    "status": "success",
                    "results": []
                };
            }
            callback.call(null, rs);
        }
    });
}

function SaveFunction(data, callback) {
    if (data && data._id) {
        //Update user if _id is present       
        User.findById(data._id, function(err, results) {
            if (err) config.handleError(err, callback);
            if (results) {
                // We can individually check and update
                // Dont do results = data;
                if (data.userName) results.userName = data.userName;
                if (data.userEmail) results.userEmail = data.userEmail;
                if (data.userPass) results.userPass = data.userPass;
                if (data.userNotes) results.userNotes = data.userNotes;
                results.save();
                rs = {
                    "status": "success",
                    "data": results
                };
                callback.call(null, rs);
            } else {
                rs = {
                    "status": "error",
                    "data": "Pass Valid _id"
                };
                callback.call(null, rs);
                return;
            }

        });
    } else {
        User.create(data, function(err, results) {
            if (err) return config.handleError(err, callback);
            else {
                var rs = {
                    "status": "success",
                    "data": results
                };
                callback.call(null, rs);
            }
        });
    }
}

function RemoveUser(data, callback) {
    User.findByIdAndRemove(data._id, function(err) {
        if (err) return config.handleError(err, callback);
        else {
            var rs = {
                "status": "success",
                "data": []
            };
            callback.call(null, rs);
        }
    });
}
exports.remove = RemoveUser;
exports.find = FindUser;
exports.save = SaveFunction;
