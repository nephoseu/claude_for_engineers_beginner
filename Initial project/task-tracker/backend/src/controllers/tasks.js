let tasks = [
  { id: 1, title: 'Set up project', done: true },
  { id: 2, title: 'Write onboarding doc', done: false },
];

function getTasks(req, res) {
  res.json(tasks);
}

module.exports = { getTasks, tasks };
