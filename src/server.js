import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoutes from "./routes/userRoutes.js";
import cors from "cors";
import courseRoutes from './routes/courseRoutes.js'
import trainerRoutes from './routes/trainerRoutes.js';

dotenv.config(); 

const app = express();

app.use(cors());

// Middleware
app.use(express.json());

// DB Connection

if (!process.env.MONGO_URI) {
  console.error("MONGO_URI environment variable is not defined");
  process.exit(1);
}

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected "))
  .catch((err) => console.log("DB connection error:", err));

// Routes
app.use("/api/users", userRoutes);
app.use("/api/courses", courseRoutes);
app.use('/api/trainers', trainerRoutes);

// Serve images from public folder
// app.use('/client/public/images', express.static(path.join(path.resolve(), 'public')));

app.get("/", (req, res) => {
  res.send("GymFit API running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));