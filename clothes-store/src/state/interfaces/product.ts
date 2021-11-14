export interface IProductState {
  products: {
    _id?: string;
    productName?: string;
    productDescription?: string;
    productImages?: string[];
    productCategories?: string[];
    productBrand?: string;
    productSizes?: string[];
    productQty?: number;
    productPrice?: number;
    createdAt?: Date;
    updatedAt?: Date;
    __v?: number;
  }[];
}
