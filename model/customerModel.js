const { DataTypes } = require("sequelize");
const sequelize  = require("../config/database");
const Order = require("./orderModel")


const Customer = sequelize.define('Customer', {
    CustomerID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    PasswordHash: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  });

  Customer.hasMany(Order, {
    foreignKey: 'CustomerID',
    as: 'orders',
  });
  Order.belongsTo(Customer, {
    foreignKey: 'CustomerID',
    as: 'customer',
  });

  module.exports = Customer;
