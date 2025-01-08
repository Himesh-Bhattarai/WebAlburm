const mongoose = require('mongoose');

const imageSchema = new mnongoose.Schema({
    user: {
  type: mongoose.Schema.Types.ObjectId, 
  ref: 'User',                           
  required: true,                      
},
    Title:{
        require: true,
        type : String
    },
    ImageURI:{
        require:true,
        type: String,

    }
})

module.exports = mongoose.model("Image", imageSchema);