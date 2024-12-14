const router = require("express").Router();
const TodoController = require("../controller/todoController");

router.post("/", TodoController.createTodo);
router.get("/", TodoController.getTodos);
router.get("/:id", TodoController.getTodo);
router.put("/:id", TodoController.updateTodo);
router.delete("/:id", TodoController.deleteTodo);

module.exports = router;
