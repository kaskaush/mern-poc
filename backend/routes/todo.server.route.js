import express from "express";
import * as todoController from "../controllers/todo.server.controller";

const router = express.Router();

router
  .route("/todos")
  .get(todoController.getTodos)
  .post(todoController.addTodo)
  .put(todoController.updateTodo);

router
  .route("/todo/:id")
  .get(todoController.getTodo)
  .delete(todoController.deleteTodo);

export default router;
