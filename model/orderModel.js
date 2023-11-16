const { DataTypes } = require("sequelize");
const sequelize  = require("../config/database");
const OrderItem = require("./orderItemModel")
const Payment = require("./paymentModel")



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

  Order.hasMany(OrderItem, {
    foreignKey: 'orderID',
    as: 'orderItems',
  });

  OrderItem.belongsTo(Order, {
    foreignKey: 'orderID',
    as: 'order',
  });
  
  Order.hasOne(Payment, {
    foreignKey: 'orderID',
    as: 'payment',
  });
  Payment.belongsTo(Order, {
    foreignKey: 'orderID',
    as: 'order',
  });
  module.exports = Order;
