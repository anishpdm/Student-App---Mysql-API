const express = require('express');
const studentModel = require('../models/student');

const router = express.Router();

// Route to add a new student
router.post('/', (req, res) => {
    console.log(req.body)
  studentModel.insertStudent(req.body, (error, results) => {
    if (error) {
      res.status(500).send('Error inserting student data'+error);
      return;
    }
    res.status(201).send(`Student added with ID: ${results.insertId}`);
  });
});

// Route to get a student by admission number
router.post('/admno', (req, res) => {

    var admno=req.body.admno

  studentModel.findStudentByAdmNo(admno, (error, results) => {
    if (error) {
      res.status(500).send('Error retrieving student data');
      return;
    }
    if (results.length > 0) {
      res.status(200).json(results[0]);
    } else {
      res.status(404).send('Student not found');
    }
  });
});

module.exports = router;
