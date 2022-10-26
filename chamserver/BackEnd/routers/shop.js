const express = require("express");
const router = express.Router();
const {
  ShopList,
  ShopSlideMain,
  User,
  ShopCart,
  ShopBuy,
  ShopReview,
  ShopSeller,
} = require("../models");
const imgUpload = require("../middleware/imgUpload");
const path = require("path");
router.post("/shop/uploads", imgUpload.single("file"), async (req, res) => {
  const { user_id, name, introduction, category, price } = JSON.parse(
    req.body.data
  );
  ShopList.create({
    user_id,
    name,
    introduction,
    category,
    image: path.join("/assets/imgs", req.file.filename),
    price,
    grade: 0,
    review: 0,
    permission: "N",
  });
  res.send("끝");
});

//슬라이드 데이터 올리기
router.post(
  "/shop/uploadsSlide",
  imgUpload.single("file"),
  async (req, res) => {
    await ShopSlideMain.create({
      shop_id: req.body.data,
      backgroundImg: path.join("/assets/imgs", req.file.filename),
    });
    const slideData = await ShopSlideMain.findAll({
      include: [{ model: ShopList }],
      raw: true,
    });
    res.send(slideData);
  }
);

router.get("/shop/data", async (req, res) => {
  const shopData = await ShopList.findAll({
    where: { permission: "Y" },
    raw: true,
  });
  res.send(shopData);
});
router.get("/shop/permission", async (req, res) => {
  const shopData = await ShopList.findAll({
    where: { permission: "N" },
    raw: true,
  });
  res.send(shopData);
});

// 슬라이드 데이터 받아오기
router.get("/shop/slide", async (req, res) => {
  const slideData = await ShopSlideMain.findAll({
    include: [{ model: ShopList }],
    raw: true,
  });
  res.send(slideData);
});

router.post("/shop/permissionCheck", async (req, res) => {
  const { user_id } = req.body;
  const shopData = await ShopList.findAll({
    where: { user_id },
    raw: true,
  });
  res.send(shopData);
});
router.post("/shop/deleteSlide", async (req, res) => {
  const { id } = req.body;
  await ShopSlideMain.destroy({
    where: { shop_id: id },
  });
  const shopData = await ShopSlideMain.findAll({
    raw: true,
  });
  res.send(shopData);
});

router.post("/shop/permission", async (req, res) => {
  let { type, id } = req.body;
  type = type == "승인" ? "Y" : "D";
  await ShopList.update({ permission: type }, { where: { id } });
  const shopData = await ShopList.findAll({
    where: { permission: "N" },
    raw: true,
  });
  res.send(shopData);
});
router.post("/shop/cart", async (req, res) => {
  const { user_id, id: shop_id, num } = req.body;
  await ShopCart.findOne({ where: { user_id, shop_id } }).then((result) => {
    if (result) result.update({ num: result.num + num });
    else ShopCart.create({ user_id, shop_id, num });
  });
  res.send("끝");
});
router.post("/shop/cartData", async (req, res) => {
  const { user_id } = req.body;
  const cartData = await ShopCart.findAll({
    where: { user_id },
    raw: true,
    include: [ShopList],
  });
  res.send(cartData);
});
router.post("/shop/buyingData", async (req, res) => {
  for (let i = 0; i < Object.values(req.body[0]).length; i++) {
    await ShopBuy.create({
      user_id: req.body[0][i].user_id,
      shop_id: req.body[0][i].shop_id,
      num: req.body[0][i].num,
      review: "none",
    });

    await ShopCart.destroy({
      where: {
        user_id: req.body[0][i].user_id,
        shop_id: req.body[0][i].shop_id,
      },
    });
  }

  await User.increment(
    { point: +Math.ceil(req.body[1].totalPrice * 0.05 - req.body[1].point) },
    { where: { user_id: req.body[0][0].user_id } }
  );
  const cartData = await ShopCart.findAll({
    where: { user_id: req.body[0][0].user_id },
  });

  res.send(cartData);
});
router.post("/shop/boughtData", async (req, res) => {
  const { user_id } = req.body;
  const boughtData = await ShopBuy.findAll({
    where: { user_id },
    raw: true,
    include: [ShopList, ShopReview],
  });
  res.send(boughtData);
});
router.post("/shop/writeReview", async (req, res) => {
  const { user_id, review_id, grade, review, shop_id } = req.body;
  await ShopReview.create({
    user_id,
    review_id,
    grade,
    review,
    shop_id,
  });
  await ShopBuy.update({ review: "done" }, { where: { id: review_id } });
  const findReview = await ShopReview.findAll({
    where: { shop_id },
    raw: true,
  });
  const reviewNum = findReview.length;
  const findGrade = await ShopList.findOne({
    where: { id: shop_id },
    raw: true,
  });
  const reviewGrade = findGrade.grade;
  if (reviewGrade) {
    await ShopList.update(
      {
        grade: (reviewGrade * (reviewNum - 1) + grade) / reviewNum,
      },
      { where: { id: shop_id } }
    );
  } else {
    await ShopList.update({ grade }, { where: { id: shop_id } });
  }
  res.send("끝");
});
router.post("/shop/getProductionData", async (req, res) => {
  const { id } = req.body;
  let shopData = await ShopList.findAll({
    where: { id },
    include: [{ model: ShopReview }],
  });
  const userIdData = shopData[0].ShopReviews.map((v) => v.user_id);
  let productionData = [];
  for (let i = 0; i < userIdData.length; i++) {
    const userProfile = await User.findOne({
      where: { user_id: userIdData[i] },
      attributes: ["profile_img"],
      raw: true,
    });
    productionData = [
      ...productionData,
      {
        profile_img: userProfile.profile_img,
        review: shopData[0].ShopReviews[i].review,
        num: userIdData.length,
      },
    ];
  }
  res.send(productionData);
});
router.post("/profile/applySeller", async (req, res) => {
  const { user_id } = req.body;
  const sellerData = await ShopSeller.findOne({
    where: { user_id },
    raw: true,
  });
  if (sellerData) {
    res.send(false);
  } else {
    await ShopSeller.create({
      user_id,
      permission: "N",
    });
    res.send(true);
  }
});
router.get("/shop/getSellerData", async (req, res) => {
  const sellerData = await ShopSeller.findAll({
    where: { permission: "N" },
    include: [{ model: User }],
    raw: true,
  });
  res.send(sellerData);
});
router.post("/shop/resultSellerData", async (req, res) => {
  const { user_id, result } = req.body;
  if (result === "approve") {
    await ShopSeller.update({ permission: "Y" }, { where: { user_id } });
    await User.update({ type: "S" }, { where: { user_id } });
  } else {
    await ShopSeller.update({ permission: "D" }, { where: { user_id } });
  }
  res.send("끝");
});
router.post("/shop/getTotalSellData", async (req, res) => {
  const { user_id } = req.body;
  const totalData = await ShopList.findAll({
    where: { user_id },
    include: [ShopBuy],
    raw: true,
  });
  res.send(totalData);
});

router.post("/shop/manageProduct", async (req, res) => {
  const { id } = req.body;
  await ShopList.destroy({ where: { id } });
  const shopData = ShopList.findAll({});
  res.send(shopData);
});
module.exports = router;
