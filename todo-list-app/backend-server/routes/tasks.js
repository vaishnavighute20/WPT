const express = require('express');
const router = express.Router();
const db = require('../db'); // Import your db connection

// Fetch all tasks
router.get('/', (req, res) => {
  db.query('SELECT * FROM tasks', (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Database query error' });
    }
    res.json(results);
  });
});

// Add a new task
router.post('/add-task', (req, res) => {
  const { assignedTo, status, dueDate, priority, comments } = req.body;
  const query = 'INSERT INTO tasks (assignedTo, status, dueDate, priority, comments) VALUES (?, ?, ?, ?, ?)';
  
  db.query(query, [assignedTo, status, dueDate, priority, comments], (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to add task' });
    }
    res.status(201).json({ id: result.insertId, assignedTo, status, dueDate, priority, comments });
  });
});

module.exports = router;
