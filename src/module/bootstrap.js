import { Router } from "express";
import userRouter from "./user/user.routes.js";
const bootstrap = Router();

bootstrap.use("/v1", userRouter);
// bootstrap.use("/v1", authorRouter);

export default bootstrap;