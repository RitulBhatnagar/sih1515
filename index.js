const express = require('express');
const dotenv = require("dotenv");

// Load environment variables from .env file and check for errors
const result = dotenv.config();
if (result.error) {
  console.error("Error loading .env file:", result.error);
  process.exit(1); // Exit the application if there's an error
}

const app = express();
const port = process.env.PORT || 3000;
const router = express.Router();

app.use(express.json());

const parking = require("./routes/parking");

app.use("/parking", parking);
// router.use("/parking", parking)



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
// module.exports = router;