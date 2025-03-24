const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
const authoRoutes = require("./routes/authRoutes");
require("./models/User");
require("./services/passport");

mongoose.connect(keys.mongoURI);
const app = express();
authoRoutes(app);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
