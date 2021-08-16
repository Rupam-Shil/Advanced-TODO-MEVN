const router = require('express').Router();
const Todo = require('../models/Todo');

router.post('/', async (req, res) => {
	let todo = await new Todo(req.body);
	todo = await todo.save();
	res.json(todo);
});

router.put('/', async (req, res) => {
	let todo = await Todo.findOne({ userId: req.body.userId });
	await todo.todos.push({
		value: req.body.value,
		isChecked: req.body.isChecked,
	});
	todo = await todo.save();
	res.send('done');
});
module.exports = router;
