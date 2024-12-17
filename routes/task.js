const express = require('express');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const router = express.Router();

const DATA_FILE = './data/tasks.json';

// Utility to read and write to the JSON file
const readData = () => JSON.parse(fs.readFileSync(DATA_FILE));
const writeData = (data) => fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));

// 1. Create a new task
router.post('/', (req, res) => {
  const { title, description } = req.body;
  const newTask = { id: uuidv4(), title, description, status: 'pending' };

  const tasks = readData();
  tasks.push(newTask);
  writeData(tasks);

  res.status(201).json(newTask);
});

// 2. Fetch all tasks
router.get('/', (req, res) => {
  const tasks = readData();
  res.json(tasks);
});

// 3. Fetch task by ID
router.get('/:id', (req, res) => {
  const tasks = readData();
  const task = tasks.find((t) => t.id === req.params.id);

  task ? res.json(task) : res.status(404).json({ error: 'Task not found' });
});

// 4. Update task status
router.put('/:id', (req, res) => {
  const { status } = req.body;
  const tasks = readData();
  const taskIndex = tasks.findIndex((t) => t.id === req.params.id);

  if (taskIndex !== -1) {
    tasks[taskIndex].status = status || tasks[taskIndex].status;
    writeData(tasks);
    res.json(tasks[taskIndex]);
  } else {
    res.status(404).json({ error: 'Task not found' });
  }
});

// 5. Delete task by ID
router.delete('/:id', (req, res) => {
  let tasks = readData();
  const newTasks = tasks.filter((t) => t.id !== req.params.id);

  if (newTasks.length < tasks.length) {
    writeData(newTasks);
    res.json({ message: 'Task deleted successfully' });
  } else {
    res.status(404).json({ error: 'Task not found' });
  }
});

module.exports = router;
