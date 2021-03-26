const express = require('express');
const mongoose =require('mongoose');
const app = express();


//connect to database
const connectDB = async () => {
    try {
      await mongoose.connect("mongodb://admin:admin@localhost:port/EcommerceMern?authSource=admin", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    
      });
      console.log("connected to database success");

    } catch (err) {
      console.log(err);
    }
  };
  connectDB();



const port = process.env.PORT || 3000;

app.listen(port,() =>console.log(`listening on port ${port}`));