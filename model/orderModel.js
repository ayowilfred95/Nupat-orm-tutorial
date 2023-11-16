const { DataTypes } = require("sequelize");
const sequelize  = require("../config/database");


const Order = sequelize.define('Order', {
    OrderID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    CreatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    TotalPrice: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  });

  Order.hasMany(OrderItem);
  OrderItem.belongsTo(Order);
  
  Order.hasOne(Payment);
  Payment.belongsTo(Order);
  module.exports = Order;
