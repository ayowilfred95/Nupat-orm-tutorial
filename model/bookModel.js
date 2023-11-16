const { DataTypes } = require("sequelize");
const sequelize  = require("../config/database");


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


  module.exports = Book;
