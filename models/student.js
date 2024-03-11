const mysql = require('mysql');

// MySQL connection
const pool = mysql.createPool({

  host: 'localhost',
  user: 'root',
  password: '',
  database: 'studentDB'
});

const studentModel = {
  insertStudent: (studentData, callback) => {
    const query = 'INSERT INTO students SET ?';
    pool.query(query, studentData, callback);
  },

  findStudentByAdmNo: (admno, callback) => {
    const query = 'SELECT * FROM students WHERE admno = ?';
    pool.query(query, [admno], callback);
  }
};

module.exports = studentModel;
