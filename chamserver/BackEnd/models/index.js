const Sequelize = require("sequelize");
const config = require("../config");
const sequelize = new Sequelize(
  config.dev.database,
  config.dev.username,
  config.dev.password,
  config.dev
);
const db = {};

const User = require("./users");
const ShopList = require("./shopList");
const ShopSlideMain = require("./shopSlideMain");
const ShopCart = require("./shopCart");
const ShopBuy = require("./shopBuy");
const ShopReview = require("./shopReview");
const ShopSeller = require("./shopSeller");
db.sequelize = sequelize;
db.User = User;
db.ShopList = ShopList;
db.ShopSlideMain = ShopSlideMain;
db.ShopCart = ShopCart;
db.ShopBuy = ShopBuy;
db.ShopReview = ShopReview;
db.ShopSeller = ShopSeller;

User.init(sequelize);
ShopList.init(sequelize);
ShopSlideMain.init(sequelize);
ShopCart.init(sequelize);
ShopBuy.init(sequelize);
ShopReview.init(sequelize);
ShopSeller.init(sequelize);

User.associate(db);
ShopList.associate(db);
ShopSlideMain.associate(db);
ShopCart.associate(db);
ShopBuy.associate(db);
ShopReview.associate(db);
ShopSeller.associate(db);
module.exports = db;
