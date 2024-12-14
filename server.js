const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const TodoRoute = require("./routes/todoRoutes");
const PORT = 4000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "http://localhost:5173" }));
app.use(bodyParser.json());

app.use("/todos", TodoRoute);

app.listen(PORT, () =>
  console.log(`Server Listening on Port http://localhost:${PORT}`)
);
