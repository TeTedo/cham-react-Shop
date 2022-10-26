const Sequelize = require("sequelize");

class ShopBuy extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        user_id: {
          type: Sequelize.STRING(16),
          allowNull: false,
        },
        shop_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        num: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        review: {
          type: Sequelize.STRING,
          allowNull: true,
        },
      },
      {
        sequelize: sequelize,
        timestamps: true,
        underscored: true,
        modelName: "ShopBuy",
        tableName: "shopBuys",
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }

  static associate(db) {
    db.ShopBuy.belongsTo(db.ShopList, {
      foreignKey: "shop_id",
      targetKey: "id",
    });
    db.ShopBuy.hasMany(db.ShopReview, {
      foreignKey: "review_id",
      sourceKey: "id",
    });
  }
}

module.exports = ShopBuy;
