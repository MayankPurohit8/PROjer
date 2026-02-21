import mongoose from "mongoose";

const userModel = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      minlength: 2,
      maxlength: 50,
      default: "",
    },
    email: {
      type: String,
      unique: true,
      required: true,
      unique: true,
      lowercase: true,
      index: true,
    },
    avatar: { type: String, default: "" },

    role: { type: String, enum: ["admin", "user"], default: "user" },
    isVerified: { type: Boolean, default: false },
    verificationToken: { type: String, default: null },
    tokenExpiry: { type: Date, default: null },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", userModel);
