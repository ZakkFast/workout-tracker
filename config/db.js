const mongoose = require('mongoose');
const config = require('config');
require('dotenv').config();
// const db = config.get('mongoURI')

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });

    console.log('MongoDB Connected..');
  } catch (err) {
    console.error(err);
    //Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
