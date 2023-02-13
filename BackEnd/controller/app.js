const express = require("express");
const app = express();
const session = require("express-session");
const { sequelize } = require("../models");
const cors = require("cors");
require("dotenv").config();
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
  origin: [
    "http://localhost:3000",
    "http://ec2-15-165-160-2.ap-northeast-2.compute.amazonaws.com",
  ],
};
app.use(cors(options));

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
