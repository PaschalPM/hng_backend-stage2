require('./mongodb-conf')
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PersonRouter = require('./persons/router.js')

// Middleware to parse JSON and URL-encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api', PersonRouter)

// Start the Express server
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
