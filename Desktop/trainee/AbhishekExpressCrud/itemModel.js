var mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  
  id : {
    type :  Number,
    required: true,

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
  }

});

const item = mongoose.model("item", itemSchema);
module.exports = item;