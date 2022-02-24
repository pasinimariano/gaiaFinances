require("dotenv").config();
const server = require("./src/server");
const { CONNECTION } = require("./src/db/");

const { SERVER_HOST, SERVER_PORT } = process.env;
console.log(CONNECTION.models);
CONNECTION.sync()
  .then(async () => {
    try {
      await CONNECTION.authenticate();
      console.log("Connection to the DB was successful");
    } catch (error) {
      console.log(
        `An error ocurred when trying to connect to the DB: ${error}`
      );
    }
  })
  .then(() => {
    server.listen(SERVER_PORT, SERVER_HOST, () => {
      console.log(`Server running on ${SERVER_HOST}:${SERVER_PORT}`);
    });
  });
