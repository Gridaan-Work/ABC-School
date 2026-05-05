const mongoose=require("mongoose")

const dbconnection=async()=>{
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/SCHOOL_DATA")
        console.log("Database is connected............")
    }catch(err){
        console.log("Database connection error",err)
    }
}

module.exports=dbconnection;