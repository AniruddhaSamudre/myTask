const mongoose=require('mongoose');

const listing_scehma=new mongoose.Schema({
    title:{
        type:String,
        trim:true,
        required:true,
        minlength:1
    },
    price:{
        type:String,
        trim:true,
        required:true,
        minlength:1
    },
    locality:{
        type:String,
        trim:true,
        required:true,
        minlength:1
    },
    details:{
        type:String,
        trim:true,
        required:true,
        minlength:1
    }
});

const Listing=mongoose.model("Listing",listing_scehma);
module.exports=Listing;