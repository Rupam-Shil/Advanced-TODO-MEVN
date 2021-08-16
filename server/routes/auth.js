const router = require('express').Router();
const { check, validationResult } = require('express-validator');
const User = require('../models/User');
const bcrypt = require('bcrypt');

router.post(
	'/signup',
	[
		check('email', 'Please Provide a valid email').isEmail(),
		check(
			'password',
			'Please provide a password of more than 6 character'
		).isLength({ min: 6 }),
	],
	async (req, res) => {
		const { name, email, password } = req.body;

		const errors = validationResult(req);
		if (errors.isEmpty()) {
			const checkUser = await User.findOne({ email: email });
			if (checkUser) {
				res.status(200).json({ error: 'User Already Exist' });
			} else {
				const hashedPassword = await bcrypt.hash(password, 10);
				let user = new User({
					name: name,
					email: email,
					password: hashedPassword,
				});
				user = await user.save();

				res.json(user);
			}
		} else {
			res.status(400).json({ errors: errors.array() });
		}
	}
);

router.post('/login', async (req, res) => {
	let user = await User.findOne({ email: req.body.email });
	if (!user) {
		res.status(200).json({ error: 'User not registered' });
	} else {
		const isPasswordMatched = await bcrypt.compare(
			req.body.password,
			user.password
		);
		if (!isPasswordMatched) {
			res.status(400).json({ error: 'Invalid Credentials' });
		} else {
			res.json({ name: user.name, email: user.email, _id: user._id });
		}
	}
});

module.exports = router;
