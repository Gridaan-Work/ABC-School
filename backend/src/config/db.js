const mongoose = require("mongoose")

const dbconnection = async () => {
    try {
        await mongoose.connect("mongodb://admin:password@localhost:27017/schooldata?authSource=admin")
        console.log("Database is connected............")
    } catch (err) {
        console.log("Database connection error", err)
    }
}

module.exports = dbconnection;