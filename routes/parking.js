const express = require("express");
const router = express.Router();
const getBookings = require("../controllers/getBookings")
const bookParking = require("../controllers/bookParking")

router.get("/get", getBookings);
router.post("/book", bookParking);

module.exports= router;