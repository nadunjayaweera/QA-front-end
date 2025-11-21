import { Sequelize } from "sequelize";

const sequelize = new Sequelize("user_list", "root", "974UI8o8", {
  host: "192.168.1.63",
  dialect: "mysql",
});

const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log(
      "Connection to the database has been established successfully."
    );
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

testConnection();

export default sequelize;
