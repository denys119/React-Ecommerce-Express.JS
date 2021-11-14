"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var user_1 = require("../controllers/user");
var router = (0, express_1.Router)();
router.get("/users/:id", user_1.getAllUsers);
router.get("/users/findUser/:id", user_1.getUser);
router.put("/updateAdminUsers/:id", user_1.updateAdmin);
router.delete("/deleteUser/:id", user_1.deleteUser);
router.put("/updateUser/:id", user_1.updateUserProfile);
exports.default = router;
