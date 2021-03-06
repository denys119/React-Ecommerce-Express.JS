"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var product_1 = require("../controllers/product");
var router = (0, express_1.Router)();
router.post("/createProduct/:id", product_1.createProduct);
router.put("/updateProduct/:id", product_1.updateProduct);
router.delete("/deleteProduct/:id", product_1.deleteProduct);
router.get("/products", product_1.getProducts);
router.get("/products/:id", product_1.getProduct);
exports.default = router;
