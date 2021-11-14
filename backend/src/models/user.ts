import mongoose, { Schema } from "mongoose";
import { UserDocument } from "../interfaces/user";

const UserSchema: Schema = new Schema(
  {
    fullName: { type: String, required: true, unique: false },
    userName: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, unique: false },
    isAdmin: { type: Boolean, default: false },
  },

  {
    timestamps: true,
  }
);

export default mongoose.model<UserDocument>("User", UserSchema);
