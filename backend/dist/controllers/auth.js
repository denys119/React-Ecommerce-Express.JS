"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.refreshToken = exports.loginUser = exports.registerUser = void 0;
var token_1 = require("../functions/token");
var crypto_js_1 = __importDefault(require("crypto-js"));
var config_1 = __importDefault(require("../config/config"));
var user_1 = __importDefault(require("../models/user"));
var jwt_1 = __importDefault(require("../models/jwt"));
var registerUser = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var newUser, savedUser, _a, password, rest, _b, _id, restData, accessToken, refreshToken_1, userSend, newUserRefreshToken, err_1;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                newUser = new user_1.default({
                    fullName: req.body.fullName,
                    userName: req.body.userName,
                    email: req.body.email,
                    password: crypto_js_1.default.AES.encrypt(req.body.password, config_1.default.PASS_SEC).toString(),
                });
                _c.label = 1;
            case 1:
                _c.trys.push([1, 4, , 5]);
                return [4 /*yield*/, newUser.save()];
            case 2:
                savedUser = _c.sent();
                _a = savedUser._doc, password = _a.password, rest = __rest(_a, ["password"]);
                _b = savedUser._doc, _id = _b._id, restData = __rest(_b, ["_id"]);
                accessToken = (0, token_1.generateToken)(rest);
                refreshToken_1 = (0, token_1.generateRefreshToken)(rest);
                userSend = __assign(__assign({}, rest), { accessToken: accessToken });
                newUserRefreshToken = new jwt_1.default({
                    userId: _id,
                    token: refreshToken_1,
                });
                return [4 /*yield*/, newUserRefreshToken.save()];
            case 3:
                _c.sent();
                //send the response to frontend with a status 201 success and the json object
                res.status(201).json({
                    userSend: userSend,
                });
                return [3 /*break*/, 5];
            case 4:
                err_1 = _c.sent();
                res.status(500).json({ message: err_1.message, err: err_1 });
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.registerUser = registerUser;
var loginUser = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var user, hashedPassword, dbPassword, _a, password, rest, accessToken, userSend, err_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                return [4 /*yield*/, user_1.default.findOne({ userName: req.body.userName })];
            case 1:
                user = _b.sent();
                if (!user) {
                    res.status(401).json({ message: "Username or password incorrect!" });
                }
                else {
                    hashedPassword = crypto_js_1.default.AES.decrypt(user.password, config_1.default.PASS_SEC);
                    dbPassword = hashedPassword.toString(crypto_js_1.default.enc.Utf8);
                    dbPassword !== req.body.password &&
                        res.status(401).json({ message: "Wrong password" });
                    _a = user._doc, password = _a.password, rest = __rest(_a, ["password"]);
                    accessToken = (0, token_1.generateToken)(rest);
                    userSend = __assign(__assign({}, rest), { accessToken: accessToken });
                    res.status(200).json(userSend);
                }
                return [3 /*break*/, 3];
            case 2:
                err_2 = _b.sent();
                res.status(500).json({ message: err_2.message, err: err_2 });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.loginUser = loginUser;
var refreshToken = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var token, user, _a, password, rest, accessToken, userSend, err_3;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 3, , 4]);
                return [4 /*yield*/, jwt_1.default.findOne({ userId: req.params.id.toString() })];
            case 1:
                token = _b.sent();
                return [4 /*yield*/, user_1.default.findById(req.params.id)];
            case 2:
                user = _b.sent();
                if (!token || !user) {
                    res.status(401).json({ message: "Token or user not found" });
                }
                else {
                    _a = user._doc, password = _a.password, rest = __rest(_a, ["password"]);
                    accessToken = (0, token_1.generateToken)(rest);
                    userSend = __assign(__assign({}, rest), { accessToken: accessToken });
                    res.status(201).json(userSend);
                }
                return [3 /*break*/, 4];
            case 3:
                err_3 = _b.sent();
                res.status(500).json({ message: err_3.message });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.refreshToken = refreshToken;
