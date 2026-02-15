import express from "express";
import cors from "cors";
import { conn } from "./configs/DB.js";
import dotenv from "dotenv";
const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();
conn();
app.get("/", (req, res) => {
  res.send("Hello backend");
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Running on port :", PORT);
});
