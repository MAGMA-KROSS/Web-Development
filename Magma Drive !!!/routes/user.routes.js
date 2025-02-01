const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const userModel = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
router.get('/register', (req, res) => {
    res.render('register-page');
});

router.get('/login', (req, res) => {
    res.render('login-page');
});



router.post('/login',
    body('username').trim().isLength({ min: 3 }),
    body('password').trim().isLength({ min: 5 }),
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array(), message: 'Invalid data' });
        }
        const { username, password } = req.body;
        const user = await userModel.findOne({ username:username });
        if (!user) {
            return res.status(404).json({ message: 'Username or password is incorrect' });
        }
        const isMatch = await bcrypt.compare(password,user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Username or password is incorrect' });
        }
        ;
        const token = jwt.sign({ id: user._id,
            username: user.username,
            email: user.email,
            name: user.name
         }, process.env.JWT_SECRET);

        res.cookie('token', token);
        res.render('home');
    });

router.post('/register',
    body('email').trim().isEmail().isLength({ min: 13 }),
    body('password').trim().isLength({ min: 5 }),
    body('username').trim().isLength({ min: 3 }),
    body('name').trim().isLength({ min: 3 }),
    async (req, res) => {

        const errors = validationResult(req);
        console.log(errors);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array(), message: 'Invalid data' });
        }

        const { name, username, email, password } = req.body;

        const newUser = await userModel.create({
            name,
            username,
            email,
            password: await bcrypt.hash(password, 10)
        });
        // res.json(newUser);
        res.render('thanks-for-register');
        // console.log(req.body);
    });

module.exports = router;