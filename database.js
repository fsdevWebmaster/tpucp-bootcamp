const mongoose = require("mongoose");

const connectToMongo = (callback) => {
  mongoose.connect(
    // "mongodb://localhost:27017"
    "mongodb+srv://webmaster:W38M45t3r@cluster0.yn2iof3.mongodb.net/bootcampdb"
    )
    .then((result) => {
      return callback(true);
    }).catch((err) => {
      console.log("Connecting mongo error:", err);
    });
}

module.exports = {
  connectToMongo
}