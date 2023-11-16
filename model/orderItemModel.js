const { DataTypes } = require("sequelize");
const sequelize  = require("../config/database");

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

  module.exports = OrderItem;
