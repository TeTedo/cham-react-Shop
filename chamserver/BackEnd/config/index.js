const dot = require("dotenv").config();
const config = {
  dev: {
    username: "root",
    password: process.env.DB_PASSWORD,
    database: "cham",
    host: "ec2-52-79-248-61.ap-northeast-2.compute.amazonaws.com",
    dialect: "mysql",
    timezone: "+09:00",
    dialectOptions: {
      dateStrings: true,
      typeCast: true, // DB에서 가져올 때 시간 설정
    },
    define: {
      timestamps: true,
    },
  },
};

module.exports = config;
