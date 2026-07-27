const express = require('express');
const tasksRouter = require('./routes/tasks');

const app = express();
app.use(express.json());
app.use('/tasks', tasksRouter);

const PORT = process.env.PORT || 4000;

if (require.main === module) {
  app.listen(PORT, () => console.log(`task-tracker API listening on :${PORT}`));
}

module.exports = app;
