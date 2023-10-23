const express = require("express");
const sequelize = require("./config/database");
require("dotenv").config();
const router = require("./route/userRoute")

const app = express();
const port = process.env.PORT || 5000;
app.use(express.json())

app.use(router)

sequelize
  .authenticate()
  .then(() => {
    app.listen(port, () => console.log(`Listening on port ${port}`));
  })
  .catch((error) => {
    console.log(error);
  });
