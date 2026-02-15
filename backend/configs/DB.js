import mongoose from "mongoose";

export const conn = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to database successfully");
  } catch (err) {
    console.log("Cannot connect to database");
  }
};
