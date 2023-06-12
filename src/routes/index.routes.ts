import express from "express";
import InfoRouter from "./info.routes";
import ProductsRouter from "./products.routes";
import UserRouter from "./user.routes";

const Router = express.Router();

Router.use("/user", UserRouter);
Router.use("/product", ProductsRouter);
Router.use("/info", InfoRouter);

export default Router;
