const express = require('express');
const app = express();
const mongoose = require('mongoose');
const authRoute = require('./routes/auth');
const todoRoute = require('./routes/todo');
const cors = require('cors');

mongoose.connect('mongodb://localhost/advacedtodo', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});
mongoose.connection
	.once('open', () => {
		console.log('DB connected');
	})
	.on('error', () => {
		console.log('An error occurred');
	});
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/auth', authRoute);
app.use('/todo', todoRoute);
app.listen(9000, () => {
	console.log('Running on port 9000');
});
