const express = require("express");
const router = express.Router();
const imgUpload = require("../middleware/imgUpload");
const { User } = require("../models");
const path = require("path");
router.post("/profile/modify", imgUpload.single("file"), async (req, res) => {
  const { user_id, nick_name, mobile_number, address, email } = JSON.parse(
    req.body.data
  );
  if (req.file) {
    await User.update(
      {
        nick_name,
        mobile_number,
        address,
        email,
        profile_img: path.join("/assets/imgs", req.file.filename),
      },
      { where: { user_id } }
    );
    const userData = await User.findOne({ where: { user_id } });
    res.send(userData);
  } else {
    await User.update(
      { nick_name, mobile_number, address, email },
      { where: { user_id } }
    );
    const userData = await User.findOne({ where: { user_id } });
    res.send(userData);
  }
});

module.exports = router;
