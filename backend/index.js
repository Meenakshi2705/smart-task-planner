import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import planRoute from "./routes/plan.js";

const app = express();
app.use(cors());
app.use(express.json());

// routes
app.use("/plan", planRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Backend running on port ${PORT}`));
