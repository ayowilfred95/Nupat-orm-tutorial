const { DataTypes } = require("sequelize");
const sequelize  = require("../config/database");


const Admin = sequelize.define('Admin',{
  fullName: {
      type: DataTypes.STRING,
      allowNull: false
  },
  email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
  },
  password: {
      type: DataTypes.STRING,
      allowNull: false  
  },
  /**
   * @dev Verify if the admin should be automatically set to true
   */
  isAdmin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
  }
  },{ timeStamps: false })
  
  module.exports = Admin;
