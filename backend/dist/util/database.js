"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = __importDefault(require("../config/config"));
var mongoose_1 = __importDefault(require("mongoose"));
var connect = function () {
    mongoose_1.default
        .connect(config_1.default.DB)
        .then(function () {
        console.log("DB connection successful");
    })
        .catch(function (err) {
        console.log(err);
    });
};
exports.default = connect;
