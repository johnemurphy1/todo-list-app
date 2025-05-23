const express = require('express');
const cors = require('cors');
const tasksRouter = require('./routes/tasks');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/tasks', tasksRouter);

module.exports = app;

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});
