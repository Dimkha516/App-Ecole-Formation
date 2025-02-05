const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
require("dotenv").config({ path: ".env" });
const connectDatabase = require("./config/mongo_connect");
const { checkUser, requireAuth } = require("./middlewares/auth.middleware");
const userRoutes = require("./routes/user.routes");

const app = express();

// CORS OPTIONS:

// Body and cookie parser:
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// Connect to MongoDB:
connectDatabase();

// JWT:
// app.get("*", checkUser);
app.use(checkUser);
app.get("/jwt", requireAuth, (req, res) => {
  res.status(200).send(res.locals.user.id);
});


// ROUTES
app.use("/api/v1/users", userRoutes);


// SERVER
app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});

