import { DataTypes } from "sequelize";
import sequelize from "../config/database";

export const User = sequelize.define("User", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  age: {
    type: DataTypes.INTEGER,
  },
  birthYear: {
    type: DataTypes.INTEGER,
  },
  phoneNumber: {
    type: DataTypes.STRING,
  },
  city: {
    type: DataTypes.STRING,
  },
});

export default User;
