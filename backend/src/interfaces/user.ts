import { Document } from "mongoose";

export interface IUser extends Document {
  fullName: string;
  userName: string;
  email: string;
  password: string;
  isAdmin: boolean;
}

export interface UserDocument extends IUser, Document {
  _doc: {
    fullName: string;
    userName: string;
    email: string;
    isAdmin: boolean;
    _id: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
  };
  createdAt: Date;
  updatedAt: Date;
}
