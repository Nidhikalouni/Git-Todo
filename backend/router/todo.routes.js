import express from "express";
import { createTodo, getTodo } from "../controller/todo.controller.js";

const router = express.Router();

router.post("/createTodo", createTodo);
router.get("/getTodo", getTodo);

export default router;
