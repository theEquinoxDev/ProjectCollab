import mongoose from "mongoose";

const schema = mongoose.Schema;

const joinRequestSchema = new schema(
  {
    projectId: {
      type: schema.Types.ObjectId,
      ref: "Project",
      required: true,
    },
    userId: {
      type: schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "accepted", "rejected"],
      default: "pending",
    },
  },
  { timestamps: true }
);

joinRequestSchema.index({projectId: 1, userId: 1}, {unique: true});

const JoinRequest = mongoose.model("JoinRequest", joinRequestSchema);

export default JoinRequest;
