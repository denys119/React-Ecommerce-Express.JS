import { RequestHandler } from "express";
import Product from "../models/product";
import { verifyTokenAndAdmin, verifyTokenAndUser } from "../middlewares/user";

export const createProduct: RequestHandler = (req, res) => {
  verifyTokenAndAdmin(req, res, async () => {
    const newProduct = new Product(req.body);
    try {
      const savedProduct = await newProduct.save();
      res.status(200).json(savedProduct);
      res.json("ok");
    } catch (err) {
      res.status(500).json({ message: "Something went wrong", error: err });
    }
  });
};

export const updateProduct: RequestHandler = async (req, res) => {
  verifyTokenAndAdmin(req, res, async () => {
    try {
      const updatedProduct = await Product.findByIdAndUpdate(
        req.query.productId as string,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedProduct);
    } catch (err) {
      res.status(500).json({ message: "Something went wrong", err: err });
    }
  });
};

export const deleteProduct: RequestHandler = async (req, res) => {
  verifyTokenAndAdmin(req, res, async () => {
    try {
      const deletedProduct = await Product.findByIdAndDelete(
        req.query.productIdDeleted as string
      );
      res.status(200).json(deletedProduct);
    } catch (err) {
      res.status(500).json({ message: "Something went wrong", err: err });
    }
  });
};

export const getProducts: RequestHandler = async (req, res) => {
  const sortNew = req.query.new;
  const sortCategory = req.query.categories as string;
  const sortBrand = req.query.brand as string;
  try {
    let products: {} = {};
    if (sortNew) {
      products = await Product.find().sort({ createdAt: -1 }).limit(5);
    } else if (sortCategory) {
      products = await Product.find({
        productCategories: {
          $in: [sortCategory],
        },
      });
    } else if (sortBrand) {
      products = await Product.find({ productBrand: sortBrand });
    } else {
      products = await Product.find();
    }
    if (products) {
      res.status(200).json(products);
    } else {
      res.status(500).json({ message: "No products found" });
    }
  } catch (err) {
    res.status(500).json({ message: "Something went wrong", err: err });
  }
};

export const getProduct: RequestHandler = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(500).json({ message: "No product found" });
    }
  } catch (err) {
    res.status(500).json({ message: "Something went wrong", err: err });
  }
};
