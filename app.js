const express = require('express');
const studentsRouter = require('./controllers/studentRoute');

const app = express();
const port = 3000;

app.use(express.json());

// Use the students router for routes starting with '/students'
app.use('/students', studentsRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
