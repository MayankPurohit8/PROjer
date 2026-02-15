import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { conn } from "./utils/db.js";
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
