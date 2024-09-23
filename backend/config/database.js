const mongoose = require("mongoose");

const MONGO_URI = process.env.MONGO_URI || 'mongodb+srv://rshreyash08:mSxI2CvNQV9rZj43@cluster0.gm4ochd.mongodb.net/'

exports.connectDatabase = () => {
  mongoose
    .connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((con) => console.log(`MongoDB connected: ${con.connection.host}`))
    .catch((error) => {
      console.log("MongoDB connection failed");
      process.exit(1);
    });
};
