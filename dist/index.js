"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var dotenv_1 = __importDefault(require("dotenv"));
var express_1 = __importDefault(require("express"));
var index_routes_1 = __importDefault(require("./routes/index.routes"));
var cors_1 = __importDefault(require("cors"));
dotenv_1["default"].config();
var app = (0, express_1["default"])();
var port = process.env.PORT;
app.use(express_1["default"].json());
app.use((0, cors_1["default"])());
app.use("/", index_routes_1["default"]);
app.listen(port, function () {
    console.log("[server]: Server is running at http://localhost:".concat(port));
});
//# sourceMappingURL=index.js.map