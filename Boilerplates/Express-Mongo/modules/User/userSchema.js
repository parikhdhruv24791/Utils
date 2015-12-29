/*
    This file contains the schema of the collection and its methods.
*/

var config = require('../../config'),
    Schema = config.mongoose.Schema;

var userSchema = new Schema({
    userName: String,
    userEmail: String,
    userPass: String,
    userNotes: String,
    created_at: Date,
    updated_at: Date

});
// on every save, add the date
userSchema.pre('save', function(next) {
    // get the current date
    var currentDate = new Date();

    // change the updated_at field to current date
    this.updated_at = currentDate;

    // if created_at doesn't exist, add to that field
    if (!this.created_at)
        this.created_at = currentDate;

    next();
});

userSchema.pre('update', function() {
    this.update({}, {
        $set: {
            updated_at: new Date()
        }
    });
});

exports.userSchema = userSchema;
