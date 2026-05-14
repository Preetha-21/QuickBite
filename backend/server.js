import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";

const app = express();
const port = 4000;

// middleware
app.use(cors());
app.use(express.json());   // MUST be before routes

// serve images
app.use("/images", express.static("uploads"));

// DB
connectDB();

// routes
app.use("/api/food", foodRouter);

app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});