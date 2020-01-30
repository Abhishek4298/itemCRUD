const express = require('express')
const mongoose = require('mongoose')
const router = require('./itemRoutes')
const app = express()
app.use(express.json())



mongoose.connect('mongodb://localhost:27017/database',{ useNewUrlParser: true, useUnifiedTopology : true} );
const db = mongoose.connection;

db.on('connecting', function() {
  console.log('connecting to MongoDB...');
});

db.on('error', function(error) {
  console.log('Error in MongoDb connection: ' + error);
  mongoose.disconnect();
});

db.on('connected', function() {
  console.log("Database Connected");
});

app.use(router)

app.listen(3000, () => { console.log('Server is running...') });
