const express = require("express");
const router = express.Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const { sendConfirmationEmail } = require("../utils/sendEmail");

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;
  const jwtSecret = process.env.JWT_SECRET || "defaultSecret";

  if (!token) return res.status(401).send("Unauthorized");

  jwt.verify(token, jwtSecret, (err, decoded) => {
    if (err) return res.status(401).send("Invalid token");
    req.user = decoded;
    next();
  });
};

const generateActivationCode = () => {
  const ch = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let activationCode = "";
  for (let i = 0; i < 30; i++) {
    activationCode += ch[Math.floor(Math.random() * ch.length)];
  }
  return activationCode;
};

router.post("/register", async (req, res) => {
  try {
    // Check if required fields are present in the request body
    const { fullName, phoneNumber, email, password, gender } = req.body;
    if (!fullName || !phoneNumber || !email || !password || !gender) {
      return res.status(400).send("All fields are required");
    }

    const activationCode = generateActivationCode();
    const userData = { ...req.body, activationCode };
    console.log(userData)

    const user = new User(userData);

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(userData.password, salt);
    user.password = hashedPassword;

    const savedUser = await user.save();
    // sendConfirmationEmail(savedUser.email, savedUser.activationCode);
    res.status(200).send(savedUser);
  } catch (err) {
    console.error(err);

    // Check if the error is related to bcrypt hashing
    if (err.message && err.message.includes("data and salt arguments required")) {
      res.status(500).send("Internal Server Error - Password hashing issue");
    } else {
      res.status(400).send(err.message || "Registration failed");
    }
  }
});

router.post("/login", async (req, res) => {
  try {
    const data = req.body;
    const user = await User.findOne({ email: data.email });

    if (!user || !bcrypt.compareSync(data.password, user.password)) {
      return res.status(400).send("Email or password invalid");
    }

    const payload = {
      _id: user._id,
      email: user.email,
      fullName: user.fullName,
    };

    const jwtSecret = process.env.JWT_SECRET || "defaultSecret";
    const token = jwt.sign(payload, jwtSecret, { expiresIn: "1h" });

    res.status(200).send({ token: token });
  } catch (err) {
    console.error(err);
    res.status(400).send(err.message || "Login failed");
  }
});

router.get("/get/:activeCode", verifyToken, async (req, res) => {
  try {
    console.log("Activation Code:", req.params.activeCode);

    const result = await User.updateMany(
      { activationCode: { $regex: new RegExp(req.params.activeCode, "i") } },
      { $set: { isActive: true, activationCode: null } }
    );

    if (result.nModified > 0) {
      res.status(200).send("Compte activé avec succès");
    } else {
      res
        .status(404)
        .send("Activation code not found or users are already active.");
    }
  } catch (err) {
    console.error(err);
    res.status(400).send(err.message || "Activation failed");
  }
});

router.get("/getall", async (req, res) => {
  try {
    const allUsers = await User.find();
    res.status(200).send(allUsers);
  } catch (err) {
    console.error(err);
    res.status(400).send(err.message || "Failed to fetch users");
  }
});

router.get("/getbyid/:id", verifyToken, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).send(user);
  } catch (err) {
    console.error(err);
    res.status(400).send(err.message || "Failed to fetch user by ID");
  }
});



module.exports = router;
