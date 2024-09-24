const mongoose = require("mongoose");

// Connect to MongoDB


const connectDB = (uri) =>{
    console.log("connect")
    return mongoose.connect(uri,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
};

module.exports = connectDB;