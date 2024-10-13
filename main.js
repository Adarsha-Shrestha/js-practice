const express = require("express");
// const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const jwtPassword = "123456";

mongoose.connect(
  "mongodb+srv://adarshashrestha:vgSSiQHWTKD0YZgZ@cluster0.g7ojb.mongodb.net/userappnew",
);

const User = mongoose.model("User", {
  name: String,
  username: String,
  pasword: String,
});

const user = new User({
  name: "Adarsha Shrestha",
  username: "adarsha",
  password: '123456'
});

user.save();