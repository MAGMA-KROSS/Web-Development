const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authe');


router.get('/', (req, res) => {
  res.render('index');
});
router.get('/home', authMiddleware ,(req, res) => {
  res.render('home');
});





exports.router = router;