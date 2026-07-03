require('dotenv').config();
const mongoose = require("mongoose");

//connect to mongodb database
const connectDB= async() => {
    try{
        await mongoose.connect(process.env.MONGODB_URI);
    }catch(e){
        console.log("Database connection failed")
        process.exit(1);
    }
}

module.exports = connectDB