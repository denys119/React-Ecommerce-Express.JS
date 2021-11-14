import { Document } from "mongoose";

export interface IJwt extends Document {
  userId: string;
  token: string;
}

export interface JwtDocument extends IJwt, Document {
  _doc: {
    _id: string;
    token: string;
    createdAt: Date;
    updatedAt: Date;
  };
  createdAt: Date;
  updatedAt: Date;
}
