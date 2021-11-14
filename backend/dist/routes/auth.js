"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var auth_1 = require("../controllers/auth");
var router = (0, express_1.Router)();
router.post("/register", auth_1.registerUser);
router.post("/login", auth_1.loginUser);
router.post("/token/:id", auth_1.refreshToken);
exports.default = router;
