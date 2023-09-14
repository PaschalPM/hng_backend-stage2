const mongoose = require('mongoose');

// Connect to MongoDB
const mongodbURL = 'mongodb+srv://okaforpaschal018:JfOnhI9NhnQUqCxX@cluster0.5qviefb.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(mongodbURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Handle MongoDB connection events
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});
