const express = require('express');
const itemModel = require('./itemModel');
const app = express();

// 1.create item
app.post('/item/create', async (req, res) => {
  const createItem = new itemModel(req.body);
  try {
   createItem.save();
    res.send("Added succesfully");
  } catch(err) {
    console.log("error")
  }
});

// 2. item price 
app.put('/item/addPrice/:id', async (reqs, res) => {
 
  try{
    const updatedData = itemModel.findOneAndUpdate({
        id: req.params.id
    },{
        $set:{price: req.body.price}
    },{
      new:true,
    });
    console.log("updatedData price", updatedData) 
    res.send(" price Added succesfully");
  } catch(err) {
    console.log("error")
  }
});

// 4.find item
app.get('/item/search', async (req, res) => {
  const searchItem = await itemModel.find({});
  try{
    res.send(searchItem);
    console.log("getting all the items")
  } catch(err) {
    console.log("error")
  }
});

// 5.Discription of a specific item by id
app.get('/item/getById', async (req, res) => {
  const specItemDesc = await itemModel.find({id: +Object.values(req.body)[0]},{description:1});
  
  try{
    res.send(specItemDesc);
    console.log ("Description of a specific item ");
    console.log (specItemDesc);
  } catch(err) {
    console.log("error")
  }
});

module.exports = app