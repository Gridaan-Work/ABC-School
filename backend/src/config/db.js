const mongoose = require("mongoose")

const dbconnection = async () => {
    try {
        // await mongoose.connect("mongodb://admin:password@localhost:27017/schooldata?authSource=admin")
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Database is connected............")
    } catch (err) {
        console.log("Database connection error", err)
    }
}

module.exports = dbconnection;
