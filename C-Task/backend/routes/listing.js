const express=require("express");
const verify=require('../routes/verifyToken');

const listingRoutes=express.Router();
const Listing=require('../Models/Listing');

//get all Listing
listingRoutes.get("/",async(req,res)=>{
    try {
        const listing=await Listing.find();
        res.send(listing);
    } catch (error) {
        res.send({message:error});
    }
});

//Add new listing
listingRoutes.post("/",verify, async(req,res)=>{
const listing=new Listing({
    title:req.body.title,
    price:req.body.price,
    locality:req.body.locality,
    details:req.body.details
});
    try {
        const savedListing=await listing.save();
        res.send(savedListing);
    } catch (error) {
        res.status(400).send(error)
    }

});

//single listing
listingRoutes.get("/:listingId",async(req,res)=>{
    try {
        const listing=await Listing.findById(req.params.listingId);
        res.send(listing);
    } catch (error) {
        res.send({message:error});
    }
});

//update listing
listingRoutes.put("/:listingId",verify,async(req,res)=>{
    try {
        const listing={
            title:req.body.title,
            price:req.body.price,
            locality:req.body.locality,
            details:req.body.details
        };
    const updateListing=await Listing.findByIdAndUpdate({_id:req.params.listingId},
        listing
        );
        res.send(updateListing);

    } catch (error) {
        res.send({message:error })
    }
});


//delete listing
listingRoutes.delete("/:listingId",verify, async (req,res)=>{
    try {
        const removeListing = await Listing.findByIdAndDelete(req.params.listingId);
            res.send(removeListing); 
    } catch (error) {
        res.send({message:error});
    }
});



module.exports=listingRoutes;
