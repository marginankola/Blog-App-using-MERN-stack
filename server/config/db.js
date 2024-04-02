const mongoose = require("mongoose");

mongoose.set('strictQuery', false);


mongoose.connect("mongodb+srv://d23it167:d23it167@cluster0.2igwfgs.mongodb.net/BlogApp").then(()=>{
    console.log("connected!");
}).catch((err)=>{
    console.log(err);
})