import { Document } from "mongoose";

export interface IProduct extends Document {
  productName: string;
  productDescription: string;
  productImages: [];
  productCategories: {};
  productBrand: string;
  productSizes: [];
  productQty: number;
  productPrice: number;
}

export interface ProductDocument extends IProduct, Document {
  _doc: {
    productName: string;
    productDescription: string;
    productImages: [];
    productCategories: [];
    productBrand: string;
    productSizes: [];
    productQty: number;
    productPrice: number;
    createdAt: Date;
    updatedAt: Date;
  };
  createdAt: Date;
  updatedAt: Date;
}
