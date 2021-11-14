"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRefreshToken = exports.generateToken = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var config_1 = __importDefault(require("../config/config"));
var generateToken = function (user) {
    return jsonwebtoken_1.default.sign(user, config_1.default.JWT_SEC, { expiresIn: "1d" });
};
exports.generateToken = generateToken;
var generateRefreshToken = function (user) {
    return jsonwebtoken_1.default.sign(user, config_1.default.JWT_VERIFY_SEC);
};
exports.generateRefreshToken = generateRefreshToken;
