const express = require("express");
const Parking = require("../models/parking");
const mongoose = require("mongoose");

const getBookings = async(req, res) => {
    try{
        console.log("Establishing connection to MongoDB");
        await mongoose.connect(process.env.MONGODB_URI, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });
        console.log("Connected to MongoDB");
      const user = req.body;
      const userId = user.userId;
      console.log(user.userId)
      if(!userId){
        console.log("Please enter the userid")
        res.status(400).json("Please enter the userId")
      }
      const getParking = await Parking.findOne({userId : userId});
    res.status(200).json(getParking);
    
    }catch(error){
      res.status(500).json(error);
    }
}

module.exports = getBookings;
