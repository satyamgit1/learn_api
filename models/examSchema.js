const mongoose = require('mongoose');

const examSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  grade: {
    type: String,
    required: true
  },
  details: String
});

const Exam = mongoose.model('Exam', examSchema);

module.exports = Exam;
