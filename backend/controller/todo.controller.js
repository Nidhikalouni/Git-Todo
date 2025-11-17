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

export const updateTodo = async(req,res)=>{
  try {

    const {id} = req.params
    const todoData = await Todo.findById(id)
    if(!todoData){
      return res.json({success:false,message:"Task not found"})
    }
    const updatedData = await Todo.findByIdAndUpdate(id,req.body,{new:true})   
    return res.json({success:true,updatedData,message:"Data updated successfully!"})

  } catch (error) {
    console.log(error)
    res.json({success:false,message:error.message})
  }
}

export const deleteTodo = async(req,res)=>{
 try {
   const {id} = req.params
  const todo = await Todo.findByIdAndDelete(id,{new:true})
  if(!todo){
      return res.json({success:false,message:"Task not found"})
  }
    return res.json({success:true,message:"Task deleted successfully!",todo})
 } catch (error) {
  console.log(error)
  return res.json({success:false,message:error.message})
 }
}