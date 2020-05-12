const Task = require("../models/task");

exports.saveTask = async (req, res) => {
  const task = new Task(req.body);
  task.sorting = await Task.estimatedDocumentCount();
  await task.save();
  res.json(task);
};

exports.getTasks = async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
};

exports.updateTask = async (req, res) => {
  const tasksIds = req.body;
  for (const [i, id] of tasksIds.entries()) {
    await Task.updateOne({ _id: id }, { sorting: i });
  }
  res.json("the list was ordered");
};
