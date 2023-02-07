const express = require("express");
const router = express.Router();
const { User } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dot = require("dotenv");
//to use env Data
dot.config();
router.post("/login", async (req, res) => {
  const { user_id, user_pw } = req.body;
  const userData = await User.findOne({
    where: { user_id },
  })
    .then((result) => {
      const data = result.dataValues;
      bcrypt.compare(user_pw, data.user_pw, async (err, same) => {
        //로그인 성공
        if (same) {
          // access token
          const access_token = jwt.sign(
            {
              alg: "HS256",
              typ: "JWT",
              userId: data.user_id,
            },
            process.env.ACCSESS_TOKEN,
            {
              expiresIn: "10m",
            }
          );
          // refresh token
          const refresh_token = jwt.sign(
            {
              alg: "HS256",
              typ: "JWT",
              userId: data.user_id,
            },
            process.env.REFRESH_TOKEN,
            {
              expiresIn: "1h",
            }
          );

          res.send({ ...data, refresh_token, access_token });
        } else {
          res.send("비밀번호");
        }
      });
    })
    .catch(() => {
      res.send("아이디");
    });
});

router.post("/loginCheck", (req, res) => {
  const { access_token, refresh_token } = req.body;
  jwt.verify(
    access_token,
    process.env.ACCSESS_TOKEN,
    async (err, acc_decoded) => {
      if (err) {
        console.log("썩은토큰");
        jwt.verify(
          refresh_token,
          process.env.REFRESH_TOKEN,
          async (error, ref_decoded) => {
            if (error) {
              // 로그인 만료
              console.log("로그인 안되있음");
              res.send(false);
            } else {
              // accesstoken 다시 만들기
              const accessToken = jwt.sign(
                {
                  alg: ref_decoded.alg,
                  typ: ref_decoded.typ,
                  userId: ref_decoded.userId,
                },
                process.env.ACCSESS_TOKEN,
                {
                  expiresIn: "10m",
                }
              );

              const userData = await User.findOne({
                where: { user_id: ref_decoded.userId },
              });
              console.log("토큰 교체 완료");
              res.send({
                ...userData.dataValues,
                user_id: ref_decoded.userId,
                access_token: accessToken,
                refresh_token,
                user_pw: "",
              });
            }
          }
        );
      } else {
        const userData = await User.findOne({
          where: { user_id: acc_decoded.userId },
        });
        res.send({
          access_token,
          ...userData.dataValues,
          user_id: acc_decoded,
          refresh_token,
          user_pw: "",
        });
      }
    }
  );
});

module.exports = router;
