const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const db = await mongoose.connect('mongodb://localhost:27017/prueba');
    console.log('DB connected to', db.connection.db.databaseName);
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
};

mongoose.connection.on('connected', () => {
  console.log('Mongoose connected to DB');
});

module.exports = connectDB;
