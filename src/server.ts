import app from "./app";
import sequelize from "./config/database";

const PORT = process.env.PORT || 3000;

sequelize
  .sync()
  .then(() => {
    console.log("Database synced");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Database sync error:", err);
  });
