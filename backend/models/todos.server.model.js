import mongoose, { Schema } from "mongoose";

var todoSchema = new Schema({
  createdAt: {
    type: Date,
    default: Date.now()
  },
  fullName: String,
  todoText: String
});

export default mongoose.model("Todo", todoSchema);
