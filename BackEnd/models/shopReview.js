const Sequelize = require("sequelize");

class ShopReview extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        user_id: {
          type: Sequelize.STRING(16),
          allowNull: false,
        },
        review_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        shop_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        review: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        grade: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
      },
      {
        sequelize: sequelize,
        timestamps: true,
        underscored: true,
        modelName: "ShopReview",
        tableName: "shopReviews",
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }

  static associate(db) {
    db.ShopReview.belongsTo(db.ShopList, {
      foreignKey: "review_id",
      targetKey: "id",
    });
  }
  static associate(db) {
    db.ShopReview.belongsTo(db.User, {
      foreignKey: "user_id",
      targetKey: "user_id",
    });
  }
  static associate(db) {
    db.ShopReview.belongsTo(db.ShopList, {
      foreignKey: "shop_id",
      targetKey: "id",
    });
  }
}

module.exports = ShopReview;
