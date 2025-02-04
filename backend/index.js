const express = require("express");
require("dotenv").config({path: '.env'});
const connectDatabase = require("./config/mongo_connect");

const app = express();

connectDatabase();

// SERVER
app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
