const mongoose=require("mongoose");
mongoose.Promise=global.Promise;

mongoose.connect(`${process.env.MONGO_URI}`,{useNewUrlParser:true,useUnifiedTopology:true})
    .then(()=>{
        console.log("mongoDb is Connected");
    })

    .catch((err)=>{
        console.log('Error is occured' +err)
    })

    mongoose.set('useFindAndModify',false);
mongoose.set('useCreateIndex',true);