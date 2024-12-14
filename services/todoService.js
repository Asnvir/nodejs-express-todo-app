const TodoModel = require("../models/todoModel");

class TodoService {
  static mapToDto(todo) {
    return {
      id: todo._id.toString(),
      title: todo.title,
      isDone: todo.isDone,
    };
  }

  static async createTodo(title, isDone) {
    try {
      const newTodo = new TodoModel({ title, isDone });
      const savedTodo = await newTodo.save();

      return this.mapToDto(savedTodo);
    } catch (error) {
      console.error(`[TodoService.createTodo] - Error: ${error.message}`);
      throw new Error(error);
    }
  }

  static async getTodos() {
    try {
      const todos = await TodoModel.find();
      const todosToDto = todos.map((todo) => this.mapToDto(todo));
      return todosToDto;
    } catch (error) {
      console.error(`[TodoService.getTodos] - Error: ${error.message}`);
      throw new Error("Failed to get all todos from the DB");
    }
  }

  static async updateTodo(id, title, isDone) {
    try {
      console.log(`id:${id}, title:${title}, isDone:${isDone}`);
      const updatedTodo = await TodoModel.findByIdAndUpdate(
        id,
        { title, isDone },
        { new: true }
      );

      if (!updatedTodo) {
        console.error(
          `[TodoService.updateTodo] - Error:No todo found with id=${id}`
        );
        throw new Error(`No todo found with id=${id}`);
      }

      return this.mapToDto(updatedTodo);
    } catch (error) {
      console.error(`[TodoService.updateTodo] - Error: ${error.message}`);
      throw new Error(`Failed to update the todo with id ${id}`);
    }
  }

  static async getTodo(id) {
    try {
      const todo = await TodoModel.findById(id);
      if (!todo) {
        console.error(
          `[TodoService.getTodo] - Error:No todo found with id=${id}`
        );
        throw new Error(`No todo found with id=${id}`);
      }
      return this.mapToDto(todo);
    } catch (error) {
      console.error(`[TodoService.getTodo] - Error: ${error.message}`);
      throw new Error(`Failed to get todo with id ${id}`);
    }
  }

  static async deleteTodo(id) {
    try {
      const removedTodo = await TodoModel.findByIdAndDelete(id);
      if (!removedTodo) {
        console.error(
          `[TodoService.deleteTodo] - Error: Failed to delete todo with id=${id}`
        );
        throw new Error(`Failed to delete todo with id=${id}`);
      }
    } catch (error) {
      console.error(`[TodoService.deleteTodo] - Error: ${error.message}`);
      throw new Error(`Failed to delete with id=${id}`);
    }
  }
}

module.exports = TodoService;
