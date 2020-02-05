const express = require('express');
const mongoose = require('mongoose');
const app = express();

const routes = require('./routes/routes.js')

app.use('/routes',routes)

//connection with mongoose
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

app.listen(8080)
{
  console.log("server Running");
}