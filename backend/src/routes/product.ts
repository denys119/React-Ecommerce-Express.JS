import { Router } from "express";
import {
  createProduct,
  updateProduct,
  deleteProduct,
  getProducts,
  getProduct,
} from "../controllers/product";

const router = Router();

router.post("/createProduct/:id", createProduct);
router.put("/updateProduct/:id", updateProduct);
router.delete("/deleteProduct/:id", deleteProduct);
router.get("/products", getProducts);
router.get("/products/:id", getProduct);

export default router;
