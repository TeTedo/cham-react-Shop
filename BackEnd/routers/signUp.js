const express = require("express");
const router = express.Router();
const { User } = require("../models");
const path = require("path");
const bcrypt = require("bcrypt");
router.post("/signUp", async (req, res) => {
  const randomProfile = ~~(Math.random() * 7) + 1;
  const { user_pw } = req.body;
  bcrypt.hash(user_pw, 10, (err, encrypted) => {
    User.create({
      ...req.body,
      user_pw: encrypted,
      profile_img: path.join("/imgs", `defaultImage${randomProfile}.jpg`),
      type: "C",
      point: 0,
    }).then(() => {
      res.send("회원가입 끝");
    });
  });
});

module.exports = router;
