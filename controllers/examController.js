const Exam = require('../models/examSchema');

const createExam = async (req, res) => {
  try {
    const { name, grade, details } = req.body;
    const exam = new Exam({ name, grade, details });
    const savedExam = await exam.save();
    res.status(201).json(savedExam);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const getAllExams = async (req, res) => {
  try {
    let query = {}; // Initialize an empty query object

    // Check if grade parameter is provided in the query
    if (req.query.grade) {
      query.grade = req.query.grade; // Set the grade in the query object
    }

    // Find exams based on the constructed query
    const exams = await Exam.find(query);
    res.json(exams);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};






const getExamById = async (req, res) => {
  try {
    const exam = await Exam.findById(req.params.id);
    if (!exam) {
      return res.status(404).json({ error: 'Exam not found' });
    }
    res.json(exam);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const updateExamById = async (req, res) => {
  try {
    const { name, grade, details } = req.body;
    const updatedExam = await Exam.findByIdAndUpdate(req.params.id, { name, grade, details }, { new: true });
    if (!updatedExam) {
      return res.status(404).json({ error: 'Exam not found' });
    }
    res.json(updatedExam);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const deleteExamById = async (req, res) => {
  try {
    const deletedExam = await Exam.findByIdAndDelete(req.params.id);
    if (!deletedExam) {
      return res.status(404).json({ error: 'Exam not found' });
    }
    res.json(deletedExam);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  createExam,
  getAllExams,
  getExamById,
  updateExamById,
  deleteExamById,
};
