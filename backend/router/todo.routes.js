import express from "express";
import { createTodo, deleteTodo, getTodo, updateTodo } from "../controller/todo.controller.js";

const router = express.Router();

router.post("/createTodo", createTodo);
router.get("/getTodo", getTodo);
router.put('/updateTodo/:id',updateTodo)
router.delete('/deleteTodo/:id',deleteTodo)

export default router;
