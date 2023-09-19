// userId, parkingname,price, from, until,  parkingAddress

const mongoose = require("mongoose");
const uuid = require("uuid")

const Parking = new mongoose.Schema({
    userId : {type : String, default : () => uuid.v4()},
    parkingName : String,
    parkingPrice : String,
    from :  String,
    until :  String,
    parkingAddress : String,
    vehicleNumber :  Number,
    status : String
})

module.exports = mongoose.model("Parking", Parking);