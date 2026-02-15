import mongoose from "mongoose";

const workspacememberModel = mongoose.Schema(
  {
    workspace: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Workspace",
      required: true,
      index: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
    invitedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    role: {
      type: String,
      enum: ["admin", "manager", "member"],
      default: "member",
    },
    status: {
      type: String,
      enum: ["active", "invited", "removed"],
      default: "active",
    },
  },
  { timestamps: true }
);

workspaceMemberSchema.index({ workspace: 1, user: 1 }, { unique: true });
export default mongoose.model("WorkspaceMember", workspaceMemberSchema);
