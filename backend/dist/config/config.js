"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var PORT = parseInt(process.env.PORT, 10) || 5000;
var DB = process.env.MONGO_URL;
var JWT_SEC = process.env.JWT_SEC;
var JWT_VERIFY_SEC = process.env.JWT_VERIFY_SEC;
var PASS_SEC = process.env.PASS_SEC;
var config = {
    PORT: PORT,
    DB: DB,
    JWT_SEC: JWT_SEC,
    JWT_VERIFY_SEC: JWT_VERIFY_SEC,
    PASS_SEC: PASS_SEC,
};
exports.default = config;
