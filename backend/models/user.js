const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    fullname:{
        type : String,
        required : true
    },
    email:{
        required : true,
        type : String,
        unique : true
    },
    password:{
        type: String,
        require : true
    }

})

const User = mongoose.model("User",userSchema);

module.exports = User;