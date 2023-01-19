// Set up Express
let express = require('express');
let app = express();

// Middlewares / Routes
app.use(express.json());
app.use('/', require('./routes'));

// Modules
let db = require('./db');

// Config
require('dotenv').config();

db.initDb((err, client) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(process.env.PORT, () => {
      console.log(`Listening on port ${process.env.PORT}`);
    });
  }
});
