import { Router } from "express";
import Task from "../models/Task";

const router = Router();

router.get("/tasks", async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

router.post("/tasks", async (req, res) => {
  const { title, description } = req.body;
  const newTask = new Task({ title, description });
  const savedTask = await newTask.save();
  res.json(savedTask);
});

router.get("/tasks/:id", async (req, res) => {
  const tasks = await Task.findById(req.params.id);
  res.json(tasks);
});

router.put("/tasks/:id", async (req, res) => {
  const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(updatedTask);
});

router.delete("/tasks/:id", async (req, res) => {
  const tasks = await Task.findByIdAndDelete(req.params.id);
  res.json(tasks);
});

export default router;
