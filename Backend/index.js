require('dotenv').config(); // Load environment variables from .env file

const connectToMongo = require('./db');
connectToMongo();

const express = require('express');
const cors = require('cors');
const router = require('./Routes/router');

const app = express();
const port = process.env.PORT || 3001; // Use port from environment variables or default to 3001

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
