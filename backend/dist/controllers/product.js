"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProduct = exports.getProducts = exports.deleteProduct = exports.updateProduct = exports.createProduct = void 0;
var product_1 = __importDefault(require("../models/product"));
var user_1 = require("../middlewares/user");
var createProduct = function (req, res) {
    (0, user_1.verifyTokenAndAdmin)(req, res, function () { return __awaiter(void 0, void 0, void 0, function () {
        var newProduct, savedProduct, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    newProduct = new product_1.default(req.body);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, newProduct.save()];
                case 2:
                    savedProduct = _a.sent();
                    res.status(200).json(savedProduct);
                    res.json("ok");
                    return [3 /*break*/, 4];
                case 3:
                    err_1 = _a.sent();
                    res.status(500).json({ message: "Something went wrong", error: err_1 });
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); });
};
exports.createProduct = createProduct;
var updateProduct = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        (0, user_1.verifyTokenAndAdmin)(req, res, function () { return __awaiter(void 0, void 0, void 0, function () {
            var updatedProduct, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, product_1.default.findByIdAndUpdate(req.query.productId, {
                                $set: req.body,
                            }, { new: true })];
                    case 1:
                        updatedProduct = _a.sent();
                        res.status(200).json(updatedProduct);
                        return [3 /*break*/, 3];
                    case 2:
                        err_2 = _a.sent();
                        res.status(500).json({ message: "Something went wrong", err: err_2 });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); });
        return [2 /*return*/];
    });
}); };
exports.updateProduct = updateProduct;
var deleteProduct = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        (0, user_1.verifyTokenAndAdmin)(req, res, function () { return __awaiter(void 0, void 0, void 0, function () {
            var deletedProduct, err_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, product_1.default.findByIdAndDelete(req.query.productIdDeleted)];
                    case 1:
                        deletedProduct = _a.sent();
                        res.status(200).json(deletedProduct);
                        return [3 /*break*/, 3];
                    case 2:
                        err_3 = _a.sent();
                        res.status(500).json({ message: "Something went wrong", err: err_3 });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); });
        return [2 /*return*/];
    });
}); };
exports.deleteProduct = deleteProduct;
var getProducts = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var sortNew, sortCategory, sortBrand, products, err_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                sortNew = req.query.new;
                sortCategory = req.query.categories;
                sortBrand = req.query.brand;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 10, , 11]);
                products = {};
                if (!sortNew) return [3 /*break*/, 3];
                return [4 /*yield*/, product_1.default.find().sort({ createdAt: -1 }).limit(5)];
            case 2:
                products = _a.sent();
                return [3 /*break*/, 9];
            case 3:
                if (!sortCategory) return [3 /*break*/, 5];
                return [4 /*yield*/, product_1.default.find({
                        productCategories: {
                            $in: [sortCategory],
                        },
                    })];
            case 4:
                products = _a.sent();
                return [3 /*break*/, 9];
            case 5:
                if (!sortBrand) return [3 /*break*/, 7];
                return [4 /*yield*/, product_1.default.find({ productBrand: sortBrand })];
            case 6:
                products = _a.sent();
                return [3 /*break*/, 9];
            case 7: return [4 /*yield*/, product_1.default.find()];
            case 8:
                products = _a.sent();
                _a.label = 9;
            case 9:
                if (products) {
                    res.status(200).json(products);
                }
                else {
                    res.status(500).json({ message: "No products found" });
                }
                return [3 /*break*/, 11];
            case 10:
                err_4 = _a.sent();
                res.status(500).json({ message: "Something went wrong", err: err_4 });
                return [3 /*break*/, 11];
            case 11: return [2 /*return*/];
        }
    });
}); };
exports.getProducts = getProducts;
var getProduct = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var product, err_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, product_1.default.findById(req.params.id)];
            case 1:
                product = _a.sent();
                if (product) {
                    res.status(200).json(product);
                }
                else {
                    res.status(500).json({ message: "No product found" });
                }
                return [3 /*break*/, 3];
            case 2:
                err_5 = _a.sent();
                res.status(500).json({ message: "Something went wrong", err: err_5 });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getProduct = getProduct;
