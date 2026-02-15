import mongoose from "mongoose";

const activityLogModel = new mongoose.Schema(
  {
    workspace: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Workspace",
      required: true,
      index: true,
    },

    project: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project",
      index: true,
    },

    task: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Task",
      index: true,
    },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },

    action: {
      type: String,
      required: true,
      enum: [
        "TASK_CREATED",
        "TASK_UPDATED",
        "TASK_DELETED",
        "STATUS_CHANGED",
        "ASSIGNED",
        "COMMENT_ADDED",
        "COMMENT_DELETED",
        "PROJECT_CREATED",
        "MEMBER_ADDED",
      ],
    },

    metadata: {
      type: Object,
    },
  },
  { timestamps: true }
);

activityLogSchema.index({ workspace: 1, task: 1, createdAt: -1 });

export default mongoose.model("ActivityLog", activityLogModel);
