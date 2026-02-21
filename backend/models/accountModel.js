import mongoose from "mongoose";

const accountModel = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
    provider: {
      type: String,
      enum: ["local", "google", "github"],
      required: true,
    },
    providerId: String,
    password: { type: String, required: true, minlength: 6, select: false },
  },
  {
    timestamps: true,
  }
);

accountSchema.index(
  { provider: 1, providerId: 1 },
  { unique: true, sparse: true }
);

accountSchema.index({ userId: 1, provider: 1 }, { unique: true });
