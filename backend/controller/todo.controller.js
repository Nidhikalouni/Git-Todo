import { Todo } from "../models/todo.model.js";

export const createTodo = async (req, res) => {
  try {
    const todo = await Todo.create(req.body);
    res.json({ message: "Todo created", todo });
  } catch (err) {
    res.json({ error: err.message });
  }
};

export const getTodo = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (err) {
    res.json({ error: err.message });
  }
};
