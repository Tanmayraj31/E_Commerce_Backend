const mongoose = require("mongoose");
//const { boolean } = require("zod");

const userSchema = new mongoose.Schema({
    name: String,
    email:{
        type: String,
        unique: true
    },
    password: String,
    isAdmin:{
        type: Boolean,
        default: false
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;