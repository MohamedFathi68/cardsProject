import { Router } from "express";
import userRouter from "./user/user.routes.js";
import traderRouter from "./trader/trader.routes.js";
const bootstrap = Router();

bootstrap.use("/v1", userRouter);
bootstrap.use("/v1", traderRouter);

export default bootstrap;