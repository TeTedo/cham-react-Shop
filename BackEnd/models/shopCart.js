const Sequelize = require("sequelize");

class ShopCart extends Sequelize.Model {
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
      },
      {
        sequelize: sequelize,
        timestamps: true,
        underscored: true,
        modelName: "ShopCart",
        tableName: "shopCarts",
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
  static associate(db) {
    db.ShopCart.belongsTo(db.ShopList, {
      foreignKey: "shop_id",
      targetKey: "id",
    });
  }
}

module.exports = ShopCart;
