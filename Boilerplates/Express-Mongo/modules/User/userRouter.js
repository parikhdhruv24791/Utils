/*
    This file contains the Routes related to this module and binds it with the controller methods defined in module's Model.
*/

var User = require("./UserModel"),
    router = require("express").Router();

function saveUserRequest(req, res) {
    User.save(req.body, function(data) {
        res.send(data);
    });
}

function getUser(req, res) {
    User.find(req.body, function(data) {
        res.send(data);
    });
}

function removeUser(req, res) {
    User.remove(req.body, function(data) {
        res.send(data);
    });
}


router.post("/User/remove", removeUser);
router.post("/User/get", getUser);
router.post("/User/save", saveUserRequest);

module.exports = router;
