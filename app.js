const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const designersRoute = require('./routes/designers');

const app = express();
app.use(cors({
  origin: 'https://emptycup-frontend-jbba.vercel.app',
  credentials: true
}));
app.use(express.json());

app.use('/api', designersRoute);

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => console.error(err)); 
