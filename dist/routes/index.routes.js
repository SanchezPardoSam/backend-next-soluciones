"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var info_routes_1 = __importDefault(require("./info.routes"));
var products_routes_1 = __importDefault(require("./products.routes"));
var user_routes_1 = __importDefault(require("./user.routes"));
var Router = express_1["default"].Router();
Router.use("/user", user_routes_1["default"]);
Router.use("/product", products_routes_1["default"]);
Router.use("/info", info_routes_1["default"]);
exports["default"] = Router;
//# sourceMappingURL=index.routes.js.map