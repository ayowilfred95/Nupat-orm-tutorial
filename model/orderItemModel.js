const { DataTypes } = require("sequelize");
const sequelize  = require("../config/database");
const Book = require("./bookModel")

const OrderItem = sequelize.define('OrderItem', {
    orderItemID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  });

  OrderItem.belongsTo(Book, {
    foreignKey: 'BookID',
    as: 'book',
  });

  module.exports = OrderItem;
