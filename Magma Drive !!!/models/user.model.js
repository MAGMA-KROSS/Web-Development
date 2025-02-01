const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        minlength: [3, 'Name must be at least 3 characters long']
    },
    username: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        minlength: [3, 'Name must be at least 3 characters long'],
        unique: true
    },
    email:{
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        unique: true,
        minlength: [13, 'Name must be at least 3 characters long']
    },
    password:{
        type: String,
        required: true,
        trim: true,
        minlength: [5, 'Password must be at least 8 characters long']
    }
    
});

const User = mongoose.model('User', userSchema);

module.exports = User;