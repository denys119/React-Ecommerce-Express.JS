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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserProfile = exports.deleteUser = exports.updateAdmin = exports.getUser = exports.getAllUsers = void 0;
var config_1 = __importDefault(require("../config/config"));
var crypto_js_1 = __importDefault(require("crypto-js"));
var user_1 = __importDefault(require("../models/user"));
var user_2 = require("../middlewares/user");
var getAllUsers = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        (0, user_2.verifyTokenAndAdmin)(req, res, function () { return __awaiter(void 0, void 0, void 0, function () {
            var query, users, _a, userSend, _i, users_1, user, _b, password, rest, err_1;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        query = req.query.new;
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 6, , 7]);
                        if (!query) return [3 /*break*/, 3];
                        return [4 /*yield*/, user_1.default.find().sort({ _id: -1 }).limit(5)];
                    case 2:
                        _a = _c.sent();
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, user_1.default.find({})];
                    case 4:
                        _a = _c.sent();
                        _c.label = 5;
                    case 5:
                        users = _a;
                        if (users) {
                            userSend = [];
                            for (_i = 0, users_1 = users; _i < users_1.length; _i++) {
                                user = users_1[_i];
                                _b = user._doc, password = _b.password, rest = __rest(_b, ["password"]);
                                userSend.push(rest);
                            }
                            res.status(200).json(userSend);
                        }
                        else {
                            res.status(500).json({ message: "No users found" });
                        }
                        return [3 /*break*/, 7];
                    case 6:
                        err_1 = _c.sent();
                        res.status(500).json({ message: "Something went wrong", err: err_1 });
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        }); });
        return [2 /*return*/];
    });
}); };
exports.getAllUsers = getAllUsers;
var getUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        (0, user_2.verifyTokenAndAdmin)(req, res, function () { return __awaiter(void 0, void 0, void 0, function () {
            var user, _a, password, rest, err_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, user_1.default.findById(req.query.userIdSearched)];
                    case 1:
                        user = _b.sent();
                        if (user) {
                            _a = user._doc, password = _a.password, rest = __rest(_a, ["password"]);
                            res.status(200).json(rest);
                        }
                        else {
                            res.status(500).json({ message: "No user found" });
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        err_2 = _b.sent();
                        res.status(500).json({ message: "Something went wrong", err: err_2 });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); });
        return [2 /*return*/];
    });
}); };
exports.getUser = getUser;
var updateAdmin = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        (0, user_2.verifyTokenAndAdmin)(req, res, function () { return __awaiter(void 0, void 0, void 0, function () {
            var updatedUser, err_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, user_1.default.findByIdAndUpdate(req.query.userIdUpdated, {
                                $set: req.body,
                            }, { new: true })];
                    case 1:
                        updatedUser = _a.sent();
                        res.status(200).json(updatedUser);
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
exports.updateAdmin = updateAdmin;
var deleteUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        (0, user_2.verifyTokenAndAdmin)(req, res, function () { return __awaiter(void 0, void 0, void 0, function () {
            var deletedUser, err_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, user_1.default.findByIdAndDelete(req.query.userIdDeleted)];
                    case 1:
                        deletedUser = _a.sent();
                        res.status(200).json(deletedUser);
                        return [3 /*break*/, 3];
                    case 2:
                        err_4 = _a.sent();
                        res.status(500).json({ message: "Something went wrong", err: err_4 });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); });
        return [2 /*return*/];
    });
}); };
exports.deleteUser = deleteUser;
var updateUserProfile = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        (0, user_2.verifyTokenAndUser)(req, res, function () { return __awaiter(void 0, void 0, void 0, function () {
            var updatedUser, err_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (req.body.password) {
                            req.body.password = crypto_js_1.default.AES.encrypt(req.body.password, config_1.default.PASS_SEC).toString();
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, user_1.default.findByIdAndUpdate(req.params.id, {
                                $set: req.body,
                            }, { new: true })];
                    case 2:
                        updatedUser = _a.sent();
                        res.status(200).json(updatedUser);
                        return [3 /*break*/, 4];
                    case 3:
                        err_5 = _a.sent();
                        res.status(500).json({ message: "Something went wrong", err: err_5 });
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); });
        return [2 /*return*/];
    });
}); };
exports.updateUserProfile = updateUserProfile;
