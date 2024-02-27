const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const jwt= require('jsonwebtoken');

const bcrypt = require("bcryptjs");

router.post(
  "/createuser",
  body("email").isEmail(),
  body("name").isLength({ min: 5 }),
  body("password", "incorrect password").isLength({ min: 5 }),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const salt = await bcrypt.genSalt(10);
    const secPassword = await bcrypt.hash(req.body.password, salt);

    try {
      const userData = {
        name: req.body.name,
        password: secPassword,
        email: req.body.email,
        location: req.body.location || "Unknown Location",
      };
      await User.create(userData);
      res.json({ success: true });
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);

router.post(
  "/loginuser",
  body("email").isEmail(),
  body("password", "incorrect password").isLength({ min: 5 }),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    let email = req.body.email;
    try {
        let userData = await User.findOne({ email: email });
      if (!userData) {
        return res
          .status(400)
          .json({ errors: "Try login with correct credentials" });
      }

      if (req.body.password !== userData.password) {
        return res
          .status(400)
          .json({ errors: "Try login with correct credentials" });
      }
      return res.json({ success: true });
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);
module.exports = router;
