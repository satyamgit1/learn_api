const express = require('express');
const mongoose = require('mongoose');
const examRouter = require('./routes/examRouter');

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/examdb';

app.use(express.json());

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });

app.use('/exams', examRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
