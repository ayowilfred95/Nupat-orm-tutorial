const { DataTypes } = require("sequelize");
const sequelize  = require("../config/database");
const OrderItem = require("./orderItemModel")


const Book = sequelize.define('Book', {
    BookID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  });

  Book.hasMany(OrderItem, {
    foreignKey: 'BookID', // Foreign key in the OrderItem model
    as: 'orderItems', // Alias to access the association
  });


  module.exports = Book;
