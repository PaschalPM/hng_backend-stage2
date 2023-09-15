require('dotenv').config()
const mongoose = require('mongoose');

// Connect to MongoDB
const mongodbURL = 'mongodb://localhost:27017/persons'
const MONGODB_URI = process.env.MONGODB_URI || mongodbURL

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Handle MongoDB connection events
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});
