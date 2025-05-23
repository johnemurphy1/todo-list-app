const db = require('../db');

const getTasks = async () => {
  const res = await db.query('SELECT * FROM tasks ORDER BY created_at DESC');
  return res.rows;
};

const addTask = async (title, description) => {
  const res = await db.query(
    'INSERT INTO tasks (title, description, is_complete, created_at) VALUES ($1, $2, false, NOW()) RETURNING *',
    [title, description]
  );
  return res.rows[0];
};

// Add other functions: updateTask, deleteTask, markComplete...

module.exports = { getTasks, addTask };
