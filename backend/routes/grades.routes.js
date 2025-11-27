const express = require('express');
const router = express.Router();
const Grade = require('../models/Grade');

// Upload grades (Bulk insert)
router.post('/upload', async (req, res) => {
  try {
    const gradesData = req.body; // Expecting an array of objects

    if (!Array.isArray(gradesData) || gradesData.length === 0) {
      return res.status(400).json({ message: 'No data provided or invalid format' });
    }

    // Optional: Validate each item or map fields if necessary
    // For now, assuming the frontend sends the correct structure matching the model

    const savedGrades = await Grade.insertMany(gradesData);
    
    res.status(201).json({ 
      message: 'Grades uploaded successfully', 
      count: savedGrades.length,
      data: savedGrades 
    });
  } catch (error) {
    console.error('Error uploading grades:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Get all grades (for verification/display)
router.get('/', async (req, res) => {
  try {
    const grades = await Grade.find().sort({ uploadedAt: -1 });
    res.json(grades);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router;
