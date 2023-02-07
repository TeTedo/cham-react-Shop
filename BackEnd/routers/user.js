const express = require("express");
const { Op } = require("sequelize");
const router = express.Router();
const { User } = require("../models");

router.post("/user/getAllUserData", async (req, res) => {
  const { user_id } = req.body;
  let userData = await User.findAll({
    where: {
      user_id: { [Op.not]: user_id },
    },
    raw: true,
  });
  userData = userData.map((v) => {
    return { ...v, user_pw: "" };
  });
  res.send(userData);
});
router.post("/user/changeUserType", async (req, res) => {
  const { user_id, type } = req.body;
  await User.update({ type }, { where: { user_id } });
  res.send("끝");
});
module.exports = router;
