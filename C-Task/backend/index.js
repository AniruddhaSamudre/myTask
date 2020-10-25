const express=require("express");
const mongoose=require("mongoose");
const bodyParser=require("body-parser");
const dotenv=require("dotenv");
const cors=require('cors');
const app=express();

dotenv.config();

require('./mongo')
//import routing
const Listing=require('./Models/Listing')
const listingRoutes=require("./routes/listing");
const userRoutes=require('./routes/user');

//route middleware
app.use(bodyParser.json());
app.use(cors());

app.use(bodyParser.urlencoded({extended:true}));
//routing
app.use("/listing",listingRoutes);
app.use("/user",userRoutes);

const port=process.env.PORT || 3000;
// port=3000;
app.listen(port,console.log(`server running on ${port} `));