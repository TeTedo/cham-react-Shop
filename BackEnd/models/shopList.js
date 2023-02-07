const Sequelize = require("sequelize");

class ShopList extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        user_id: {
          type: Sequelize.STRING(16),
          allowNull: false,
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        introduction: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        image: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        category: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        grade: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        price: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        permission: {
          type: Sequelize.TEXT,
          allowNull: false,
        },
      },
      {
        sequelize: sequelize,
        timestamps: true,
        underscored: true,
        modelName: "ShopList",
        tableName: "shopLists",
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
  static associate(db) {
    db.ShopList.belongsTo(db.User, {
      foreignKey: "user_id",
      targetKey: "user_id",
    });
    db.ShopList.hasMany(db.ShopSlideMain, {
      foreignKey: "shop_id",
      sourceKey: "id",
    });
    db.ShopList.hasMany(db.ShopCart, {
      foreignKey: "shop_id",
      sourceKey: "id",
    });
    db.ShopList.hasMany(db.ShopBuy, {
      foreignKey: "shop_id",
      sourceKey: "id",
    });
    db.ShopList.hasMany(db.ShopReview, {
      foreignKey: "shop_id",
      sourceKey: "id",
    });
  }
}

module.exports = ShopList;
