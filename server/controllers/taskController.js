const Task = require("../models/task");

module.exports.saveTask = async (req, res) => {
	const task = new Task(req.body);
	task.sorting = await Task.estimatedDocumentCount();
	await task.save();
	res.json(task);
}

module.exports.getTasks = async (req, res) => {
	const tasks = await Task.find();
	res.json(tasks);
}

module.exports.updateTask = async (req, res) => {
	const {entries} = req.body;
	for (const [i, id] of entries()) {
		await Task.updateOne({_id: id}, {sorting: i});
	}
	res.json('the list was ordered');
}