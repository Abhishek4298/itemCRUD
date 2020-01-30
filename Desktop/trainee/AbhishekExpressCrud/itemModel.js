var mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  
  id : {
    required: true,
    type: Number,
  },  

  name: {
    type: String,
    
  },
  quantity: {
    type: Number,
    default: 0,
   },

  description:{
    type : String,
    lowercase: true
  },
  price:{
    type:Number

  }
});

const item = mongoose.model("item", itemSchema);
module.exports = item;