import mongoose, { Schema } from "mongoose";

var todoSchema = new Schema({
  createdAt: {
    type: Date,
    default: Date.now()
  },
  fullName: { type: String, required: true, trim: true },
  todoText: { type: String, required: true, trim: true }
});

export default mongoose.model("Todo", todoSchema);
