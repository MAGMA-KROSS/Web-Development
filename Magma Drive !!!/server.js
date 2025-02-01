const express = require('express');
const server = express();
const userRoutes = require('./routes/user.routes');
const indexRoutes = require('./routes/index.routes');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
dotenv.config();
const connectToDB = require('./config/db');
connectToDB();
const path = require('path');


server.use(cookieParser());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.set('view engine', 'ejs');

server.use('/user', userRoutes);
server.use('/', indexRoutes.router);
server.use(express.static(path.join(__dirname, 'public')));


server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000/');
});



