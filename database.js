const mongoose = require("mongoose");

const connectToMongo = (callback) => {
  mongoose.connect(
    "mongodb://172.17.0.2:27017/tpupcbootcamp"
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