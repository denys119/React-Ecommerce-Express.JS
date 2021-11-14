import mongoose, { Schema } from "mongoose";
import { ProductDocument } from "../interfaces/product";

const ProductSchema: Schema = new Schema(
  {
    productName: { type: String, required: true, unique: true },
    productDescription: { type: String, required: true },
    productImages: { type: Array, required: true },
    productCategories: { type: Array, required: true },
    productBrand: { type: String, required: true },
    productSizes: { type: Array, required: true },
    productQty: { type: Number, required: true },
    productPrice: { type: Number, required: true },
  },

  {
    timestamps: true,
  }
);

export default mongoose.model<ProductDocument>("Product", ProductSchema);
