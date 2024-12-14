const TodoService = require("../services/todoService");

class TodoController {
  static async createTodo(req, res) {
    const { title, isDone } = req.body;
    try {
      const dto = await TodoService.createTodo(title, isDone);
      res.status(201).json({ todo: dto });
    } catch (error) {
      console.error(`[TodoController.createTodo] - Error: ${error.message}`);
      res.status(500).json({ error: "Failed to create todo." });
    }
  }

  static async getTodos(req, res) {
    try {
      const todos = await TodoService.getTodos();
      res.status(200).json({ todos });
    } catch (error) {
      console.error(`[TodoController.getTodos] - Error: ${error.message}`);
      res.status(404).json({ error: "Failed to get all todos." });
    }
  }

  static async getTodo(req, res) {
    const { id } = req.params;

    try {
      const dto = await TodoService.getTodo(id);
      res.status(200).json({ todo: dto });
    } catch (error) {
      console.error(`[TodoController.getTodo] - Error: ${error.message}`);
      res.status(404).json({ error: "Failed to get todo." });
    }
  }

  static async updateTodo(req, res) {
    const { id } = req.params;
    const { title, isDone } = req.body;
    try {
      const dto = await TodoService.updateTodo(id, title, isDone);
      res.status(200).json({ todo: dto });
    } catch (error) {
      console.error(`[TodoController.updateTodo] - Error: ${error.message}`);
      res.status(404).json({ error: "Failed to update todo." });
    }
  }

  static async deleteTodo(req, res) {
    const { id } = req.params;
    try {
      await TodoService.deleteTodo(id);
      res.status(200).json({ deletedId: id });
    } catch (error) {
      console.error(`[TodoController.deleteTodo] - Error: ${error.message}`);
      res.status(404).json({ error: "Failed to delete todo." });
    }
  }
}

module.exports = TodoController;
