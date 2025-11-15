import mongoose from "mongoose";
import AutoIncrementFactory from "mongoose-sequence";

const AutoIncrement = AutoIncrementFactory(mongoose);

const todoSchema = new mongoose.Schema(
  {
    todoId: Number,
    title: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

todoSchema.plugin(AutoIncrement, { inc_field: "todoId" });

export const Todo = mongoose.model("Todo", todoSchema);
