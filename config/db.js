const mongoose = require("mongoose");

const connectionString =
  "mongodb://root:123@localhost:27017/todo?authSource=admin";

const connection = mongoose
  .createConnection(connectionString)
  .on("open", () => {
    console.log("MongoDB connected");
  })
  .on("error", (error) => console.error(error));

module.exports = connection;
