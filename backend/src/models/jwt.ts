import mongoose, { Schema } from "mongoose";
import { JwtDocument } from "../interfaces/jwt";

const JwtSchema: Schema = new Schema(
  {
    userId: { type: String, required: true, unique: true },
    token: { type: String, required: true, unique: true },
  },

  {
    timestamps: true,
  }
);

export default mongoose.model<JwtDocument>("Jwt", JwtSchema);
