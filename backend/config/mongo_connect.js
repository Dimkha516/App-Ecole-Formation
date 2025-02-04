const mongoose = require("mongoose");

// Connect to MongoDB
const connectDatabase = async () => {
  try {
    const CLOUD_MONGO_URI =
      "mongodb+srv://" +
      process.env.DB_USER_PASSWORD +
      "@cluster0.b23i7.mongodb.net/";

    await mongoose.connect(CLOUD_MONGO_URI, {});
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Erreur de connexion à MongoDB:", error);
    process.exit(1);
  }
};

module.exports = connectDatabase;
