const dotenv = require("dotenv");
const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, "Full name can not be empty."],
  },
  email: {
    type: String,
    required: [true, "Email address is required."],
  },
  password: {
    type: String,
    minLength: [6, "Password must be at least 6 characters."],
    required: [true, "Password can not be empty."],
  },
  image: {
    type: String,
  },
  isVerified: {
    type: Boolean,
    default: "false",
  },
  mailedToken: {
    type: String,
    default: "",
  },
  authToken: {
    type: String,
    default: "",
  },
});

const UserModel = mongoose.model("User_Accounts", userSchema, "User_Accounts");

module.exports = UserModel;
