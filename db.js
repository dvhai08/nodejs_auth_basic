const Mongoose = require("mongoose");
const logger = require('./services/logger.js')
const localDB = 'mongodb+srv://dvhai08:LzD0nurJO7b4yiDD@cluster0.luw1a0i.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const connectDB = async () => {
  await Mongoose.connect(localDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  logger.info("MongoDB Connected");
};

module.exports = connectDB;
