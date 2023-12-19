const server = require("./src/server.js");
const { database } = require("./src/db.js");

database.sync({ force: true }).then(() => {
  server.listen(8080, () => {
    console.log("Server running on port 8080 and connected to DB");
  });
});
