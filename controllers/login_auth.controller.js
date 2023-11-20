const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
const UserModel = require("../models/user.model");
const validateEmail = require("../utils/VerifyEmail");
const cookieParser = require("cookie-parser");
dotenv.config();

const loginUser = async (req, res) => {
  //extract body and validate fields.
  try {
    const { email, password } = req.body;
    if (!email) {
      return res.status(400).json({ reason: "Email address is required." });
    }
    if (!validateEmail(email)) {
      return res
        .status(400)
        .json({ reason: "The provided email address is invalid." });
    }
    if (!password) {
      return res.status(400).json({ reason: "Password is required." });
    }
    if (password.length < 6) {
      return res
        .status(400)
        .json({ reason: "The password does not have minimum characters." });
    }
    //find the user in database
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .json({ reason: "No user with that email was found." });
    }

    //compare the password of user
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res
        .status(401)
        .json({ reason: "Wrong password, please try again." });
    }

    //sign a token
    const token = jwt.sign({ email }, process.env.JWT_SECRET);

    //update the user token in DB
    const updatedUser = await UserModel.findOneAndUpdate(
      { email },
      {
        authToken: token,
      }
    );
    if (!updatedToken) {
      return res.status(503).json({ reason: "Server is currently busy." });
    }
    //set a header
    res.cookie("auth", token, {
      secure: true,
      maxAge: 86400000,
      httpOnly: true,
    });

    return res.status(200).json({
      name: user.fullName,
      email: user.email,
      isVerified: user.isVerified,
    });
  } catch (e) {
    console.log("🔴  : ERROR WAS ENCOUNTERED!!" + e);
    return res
      .status(500)
      .json({ reason: "An unknown error while loggin in." });
  }
};

module.exports = loginUser;
