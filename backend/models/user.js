const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{
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

const user = mongoose.model("user",userSchema);

module.exports = user;