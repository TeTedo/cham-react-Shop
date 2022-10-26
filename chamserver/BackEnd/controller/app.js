const express = require("express");
const app = express();
const session = require("express-session");
const { sequelize } = require("../models");
const cors = require("cors");
// DB연동
sequelize
  .sync({ force: false })
  .then(() => {
    console.log("DB연결 완료");
  })
  .catch((err) => {
    console.log("DB연결 에러 : ", err);
  });

//리액트랑 백엔드 연동하기 위해cors 설정
const options = {
  origin: "http://192.168.0.128:3000",
};
app.use(cors(options));

// express-session연결
app.use(
  session({
    secret: process.env.SESSION_KEY,
    resave: false,
    saveUninitialized: true,
    cookie: {
      httpOnly: true,
      sameSite: "none",
      maxAge: 5300000,
      secure: true,
    },
  })
);

//json형태의 파일을 읽을수 있게
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);
//라우터 불러오기, 사용
const singUp = require("../routers/signUp");
const login = require("../routers/login");
const shop = require("../routers/shop");
const modifyProfile = require("../routers/modifyProfile");
const user = require("../routers/user");
const error = require("../routers/error");
app.use(singUp, login, shop, modifyProfile, user, error);

app.listen(8000, () => {
  console.log("server start");
});
