const express = require('express');
const bodyParser = require('body-parser');
const taskRoutes = require('./routes/task');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/tasks', taskRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
