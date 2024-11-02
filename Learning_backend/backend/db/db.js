const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://adarshashrestha:vgSSiQHWTKD0YZgZ@cluster0.g7ojb.mongodb.net/practice');

const AdminSchema = new mongoose.Schema({
    username: String,
    password: String
});

const UserSchema = new mongoose.Schema({
    username: String,
    password: String
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);

module.exports = {
    Admin,
    User
}