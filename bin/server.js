const app = require("../src/app");
const sequelize = require("../src/connection/sequelize");

const port = normalizePort(process.env.PORT || "3333");

function normalizePort(val) {
  const newPort = parseInt(val, 10);
  if (isNaN(newPort)) {
    return val;
  }

  if (newPort >= 0) {
    return newPort;
  }

  return false;
}

async function verifyConnection() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

app.listen(port, function () {
  verifyConnection();
  sequelize
    .sync()
    .then(() => {
      console.log(`Server started on port ${port}`);
    })
    .catch((err) => console.log("Error: " + err));
  console.log(`app listening on port ${port}`);
});
