const mongoose = require('mongoose');
const { Schema } = mongoose;

const todoSchema = new Schema({
	userId: String,
	todos: [{ value: String, isChecked: Boolean }],
});

const Todo = mongoose.model('todos', todoSchema);
module.exports = Todo;
