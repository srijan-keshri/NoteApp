const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
require("../db/conn");
const User = require("../model/userSchema");
router.get("/", (req, res) => {
  res.send("Hello from router js");
});
// Using promise

// router.post("/register", (req, res) => {
//   const { name, email, phone, work, password, cpassword } = req.body;
//   if (!name || !email || !phone || !work || !password || !cpassword) {
//     return res.status(422).json({ error: "Please fill the field properly" });
//   }

//   User.findOne({ email: email })
//     .then((userExist) => {
//       if (userExist) {
//         return res
//           .status(422)
//           .json({ error: "user alredy exists .Please Login " });
//       }
//       const user = new User({ name, email, phone, work, password, cpassword });
//       user
//         .save()
//         .then(() => {
//           res.status(201).json({ message: "User registration sucessfully" });
//         })
//         .catch((err) => {
//           res.status(500).json({ message: "Failed to register" });
//         });
//     })
//     .catch((err) => {
//       console.log(err);
//     });

// using async await
router.post("/register", async (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;
  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).json({ error: "Please fill the field properly" });
  }

  try {
    const userEmail = await User.findOne({ email: email });
    const userPhone = await User.findOne({ phone: phone });
    const userExist = userEmail || userPhone;
    if (userExist) {
      return res
        .status(422)
        .json({ error: "user alredy exists .Please Login " });
    } else if (password != cpassword) {
      return res
        .status(422)
        .json({ error: "password and confirm password are not same" });
    } else {
      const user = new User({ name, email, phone, work, password, cpassword });

      await user.save();

      res.status(201).json({ message: "User registration sucessfully" });
    }
  } catch (err) {
    console.log(err);
  }

  // res.json({ message: req.body });
  //res.send("register page");
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    //console.log(req.body);
    if (!email || !password) {
      return res.status(422).json({ error: "Please fill the field properly" });
    }
    const userLogin = await User.findOne({ email: email });
    //const userPassword = await User.findOne({ password: password });
    //const flag = userEmail && userPassword;
    if (userLogin) {
      console.log(userLogin);
      const isMatch = await bcrypt.compare(password, userLogin.password);
      console.log(isMatch);
      // console.log(userPassword);
      // console.log(flag);
      const token = await userLogin.generateAuthToken();
      console.log(token);
      res.cookie("json token", token,{
        expires: new Date(Date.now() + 60000),
        httpOnly: true
      })
      if (!isMatch) {
        res.status(400).json({ error: "Invalid credentials" });
      } else {
        res.status(201).json({ message: "Login sucessfull" });
      }
    } else {
      res.status(400).json({ error: "Invalid credentials" });
    }

    // if (flag) {
    //   return
    // } else {
    //    res.status(500).json({ message: "Failed to register" });
    // }
  } catch (err) {
    console.log(err);
  }
});
module.exports = router;
