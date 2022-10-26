const Sequelize = require("sequelize");

class ShopSlideMain extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        shop_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        backgroundImg: {
          type: Sequelize.STRING,
          allowNull: false,
        },
      },
      {
        sequelize: sequelize,
        timestamps: true,
        underscored: true,
        modelName: "ShopSlideMain",
        tableName: "shopSlideMains",
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
  static associate(db) {
    db.ShopSlideMain.belongsTo(db.ShopList, {
      foreignKey: "shop_id",
      targetKey: "id",
    });
  }
}

module.exports = ShopSlideMain;
