import express from "express";
import {
  addTodo,
  getTodo,
  getTodos,
  updateTodo,
  deleteTodo
} from "../controllers/todo.server.controller";

const router = express.Router();

router
  .route("/todos")
  .get(getTodos)
  .post(addTodo)
  .patch(updateTodo);

router
  .route("/todo/:id")
  .get(getTodo)
  .delete(deleteTodo);

export default router;
