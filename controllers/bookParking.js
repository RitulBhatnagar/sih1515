const Parking = require("../models/parking");
const uuid = require("uuid");
const mongoose = require("mongoose");

const bookParking = async (req, res) => {
  try {
    console.log("Establishing connection to MongoDB");
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");

    if (!req.body) {
      return res.status(400).json({ error: "Request body is empty." });
    }

    // Parse the request body
    console.log(req.body);


    const data = JSON.parse(JSON.stringify(req.body));

    console.log(data);
    const userId = uuid.v4();
    data.userId = userId;

    const newParking = new Parking(data);
    await newParking.save();

    console.log("Parking has been booked", newParking);
     
    res.status(200).json(newParking);

    // Close the Mongoose connection
    // mongoose.disconnect();

  } catch (error) {
    console.error("Error:", error);

    // Close the Mongoose connection in case of an error
    mongoose.disconnect();

    return res.status(500).json({ error: error.toString() });
  }
};

module.exports = bookParking;
