const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
const crypto = require("crypto");
const sendGridTransport = require("nodemailer-sendgrid-transport");
const User = mongoose.model("User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
// const { JWT_SECRET } = require("../keys");
const requireLogin = require("../middleware/authmid");

const PORT = process.env.PORT || 3000;

const transporter = nodemailer.createTransport(
  sendGridTransport({
    auth: {
      api_key: config.get("SENDGID"),
    },
  })
);

router.post("/signup", (req, res) => {
  const {
    name,
    lastname,
    email,
    password,
    mobileNumber,
    age,
    branch,
    gender,
    image,
  } = req.body;
  console.log(image);
  if (!email || !password || !name || !image) {
    return res.json({ error: "Please add all the fields" });
  }
  User.findOne({ email: email })
    .then((savedUser) => {
      if (savedUser) {
        return res.json({ error: "User already exists with this email" });
      }
      bcrypt.hash(password, 12).then((hashedpassword) => {
        const user = new User({
          email,
          password: hashedpassword,
          name,
          image,
          mobileNumber,
          age,
          branch,
          gender,
          lastname,
        });

        user
          .save()
          .then((user) => {
            transporter.sendMail({
              from: "mahenmondal111@gmail.com", // sender address
              to: user.email, // list of receivers
              subject: "Regarding Quiz Test", // Subject line
              html:
                "<b> You sucessfully complete Your  registration for quiz test.Best of luck for your  test  </b>", // html body
            });
            res.json({ message: "saved successfully" });
          })
          .catch((err) => {
            console.log(err);
          });
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/signin", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.json({ error: "Please add Your valid Email and Password" });
  }
  User.findOne({ email: email }).then((savedUser) => {
    if (!savedUser) {
      return res.json({ error: "Invalid Email or password" });
    }
    bcrypt
      .compare(password, savedUser.password)
      .then((doMatch) => {
        if (doMatch) {
          // res.json({message:"successfully signed in"})
          const token = jwt.sign(
            { _id: savedUser._id },
            config.get("JWT_SECRET")
          );
          const { _id, name, email, image } = savedUser;
          res.json({
            token,
            user: { _id, name, email, image },
            msg: "Welcome,To Our Webside",
          });
        } else {
          return res.json({ error: "Invalid Email or password" });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });
});

router.post("/reset", (req, res) => {
  crypto.randomBytes(32, (err, buffer) => {
    if (err) {
      console.log(err);
    }
    const token = buffer.toString("hex");
    User.findOne({ email: req.body.email }).then((user) => {
      if (!user) {
        return res.status(422).json({ error: "Invalid Email " });
      }
      user.resetToken = token;
      user.expireToken = Date.now() + 3600000;
      user.save().then((result) => {
        transporter.sendMail({
          to: user.email,
          from: "mahenmondal111@gmail.com",
          subject: "Reset Your Password", // Subject line
          html: `
          <h3>Click here <a href="http://localhost:3000/resets/${token}">link</a> reset your password</h3>
          `,
        });
        res.json({ message: "check your email" });
      });
    });
  });
});

router.post("/updatePassword", (req, res) => {
  const newPassword = req.body.password;
  const sentToken = req.body.token;
  User.findOne({ resetToken: sentToken, expireToken: { $gt: Date.now() } })
    .then((user) => {
      if (!user) {
        return res.status(422).json({ error: "Try again session expired" });
      }
      bcrypt.hash(newPassword, 12).then((hashedpassword) => {
        user.password = hashedpassword;
        user.resetToken = undefined;
        user.expireToken = undefined;
        user.save().then((saveduser) => {
          res.json({ message: "password updated success" });
        });
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
