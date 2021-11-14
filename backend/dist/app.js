"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var config_1 = __importDefault(require("./config/config"));
var database_1 = __importDefault(require("./util/database"));
var auth_1 = __importDefault(require("./routes/auth"));
var user_1 = __importDefault(require("./routes/user"));
var product_1 = __importDefault(require("./routes/product"));
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({
    extended: true,
}));
app.use((0, cors_1.default)());
(0, database_1.default)();
app.use("/api", auth_1.default);
app.use("/api", user_1.default);
app.use("/api", product_1.default);
app.listen(config_1.default.PORT, function () {
    console.log("Server is running");
});
