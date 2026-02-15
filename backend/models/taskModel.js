import mongoose from "mongoose";

const taskModel = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 200,
    },

    description: {
      type: String,
      trim: true,
      default: "",
    },

    workspace: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Workspace",
      required: true,
      index: true,
    },

    project: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project",
      required: true,
      index: true,
    },

    status: {
      type: String,
      enum: ["todo", "in-progress", "done"],
      default: "todo",
      index: true,
    },

    priority: {
      type: String,
      enum: ["low", "medium", "high", "critical"],
      default: "medium",
      index: true,
    },

    assignee: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      index: true,
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    dueDate: {
      type: Date,
      index: true,
    },

    labels: [
      {
        type: String,
        trim: true,
      },
    ],

    position: {
      type: Number,
      default: 0,
    },

    parentTask: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Task",
    },

    dependencies: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Task",
      },
    ],

    attachments: [
      {
        url: String,
        fileName: String,
        size: Number,
      },
    ],

    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

taskSchema.index({ project: 1, status: 1, position: 1 });

taskSchema.index({ workspace: 1, assignee: 1 });

taskSchema.index({ workspace: 1, priority: 1 });

taskSchema.index({ title: "text", description: "text" });

export default mongoose.model("Task", taskModel);
