import express from "express";
import { generatePlan } from "../services/mockPlanner.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { goal } = req.body;
  const plan = await generatePlan(goal);
  res.json(plan);
});

export default router;
