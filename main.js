const express = require("express");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const AuthRouter = require("./routes/AuthRouter");
const UserModel = require("./models/user.model");
const app = express();
dotenv.config();
console.clear();

//global environment variables
const PORT = process.env.PORT;
const DATABASEURL = process.env.DB_URL;
const DEPLOYMENT_VERSION = process.env.SERVER_VERSION;

// deps. to be used by the application.
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use("/auth", AuthRouter);

//connect to database
const connectDatabase = async () => {
  try {
    await mongoose.connect(DATABASEURL);
    return true;
  } catch (err) {
    console.log("🔴 : Error connecting to DB.\n");
    process.exit(1);
  }
};

//connect to database and start the server.
const startServer = async () => {
  console.log("⚒️  : Connecting to database.");
  await connectDatabase();
  console.log("🎉: Connected successfully.\n");
  console.log("👉 : Looking for users.");
  const users = await UserModel.find({});
  if (users.length == 0) {
    await addDemoUser();
  }
  app.listen(PORT || 3000, () => {
    console.log(`\n🎉: Application started successfully.`);
  });
};

//show the welcome logs:
console.log(
  `
  ------------------------------------
  🎉 : Deployment is live.    
  👉 : ${DEPLOYMENT_VERSION}    
  ------------------------------------
  `
);

//entry point for application
startServer();

const addDemoUser = async () => {
  console.log("👉 : Adding new demo user.");
  const newPassword = await bcrypt.hash("admin1234", 10);
  const newUser = await UserModel.create({
    email: "demo@gmail.com",
    fullName: "Demo User",
    image: "default.png",
    isVerified: false,
    password: newPassword,
    authToken: "",
    mailedToken: "",
  });
  await newUser.save();
  console.log("🎉 : New user added successfully.");
};
