const db = require("../config/db");
const mongoose = require("mongoose");
const { Schema } = mongoose;

const todoSchema = new Schema({
  title: { type: String, required: true },
  isDone: { type: Boolean, required: true },
});

const TodoModel = db.model("todo", todoSchema);

module.exports = TodoModel;
