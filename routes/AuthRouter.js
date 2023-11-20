const express = require("express");
const loginUser = require("../controllers/login_auth.controller");
const resetPassword = require("../controllers/reset_auth.controller");
const AuthRouter = express.Router();

AuthRouter.post("/login", loginUser);
AuthRouter.post("/reset", resetPassword);

module.exports = AuthRouter;
