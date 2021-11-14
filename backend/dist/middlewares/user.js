"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyTokenAndUser = exports.verifyTokenAndAdmin = exports.verifyToken = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var config_1 = __importDefault(require("../config/config"));
var verifyToken = function (req, res, next) {
    var authHeader = req.headers.token;
    if (authHeader) {
        var token = authHeader.split(" ")[1];
        jsonwebtoken_1.default.verify(token, config_1.default.JWT_SEC, function (err, user) {
            if (err)
                res.status(403).json({ message: "Token is invalid", error: err });
            req.user = user;
            next();
            return;
        });
    }
    else {
        return res.status(401).json({ message: "You are not authenticated." });
    }
};
exports.verifyToken = verifyToken;
var verifyTokenAndAdmin = function (req, res, next) {
    (0, exports.verifyToken)(req, res, function () {
        if (req.user.isAdmin && req.params.id === req.user._id) {
            next();
            return;
        }
        else {
            res.status(403).json({ message: "You are not allowed to do that" });
        }
    });
};
exports.verifyTokenAndAdmin = verifyTokenAndAdmin;
var verifyTokenAndUser = function (req, res, next) {
    (0, exports.verifyToken)(req, res, function () {
        if (req.params.id === req.user._id) {
            next();
            return;
        }
        else {
            res.status(403).json({ message: "You are not allowed to do that" });
        }
    });
};
exports.verifyTokenAndUser = verifyTokenAndUser;
