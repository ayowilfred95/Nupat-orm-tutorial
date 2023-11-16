const { DataTypes } = require("sequelize");
const sequelize  = require("../config/database");


const Payment = sequelize.define('Payment', {
    PaymentID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    PaymentAmount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    PaymentDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  });

  module.exports =Payment;
