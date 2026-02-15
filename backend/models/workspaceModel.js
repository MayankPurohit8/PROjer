import mongoose from "mongoose";

const workspaceModel = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 50,
      trim: true,
    },
    description: {
      type: String,
      maxlength: 200,
      default: "",
    },
    logo: {
      type: String,
      default: "",
      required: true,
      index: true,
    },
    isArchived: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    plan: {
      type: String,
      enum: ["free", "pro", "enterprise"],
      default: "free",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Workspace", workspaceModel);
