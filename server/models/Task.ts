import { Schema, model } from "mongoose";

const taskSchema = new Schema(
  {
    title: String,
    description: String,
    done: { type: Boolean, default: false },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("task", taskSchema);
