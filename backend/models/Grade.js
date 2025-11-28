const mongoose = require('mongoose');

const gradeSchema = new mongoose.Schema({
  studentName: {
    type: String,
    required: true
  },
  subject: {
    type: String,
    required: true
  },
  homework: {
    type: Number,
    default: 0
  },
  groupwork: {
    type: Number,
    default: 0
  },
  exams: {
    type: Number,
    default: 0
  },
  uploadedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Grade', gradeSchema);
