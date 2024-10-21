import { Router } from "express";
import { getAllTraders } from "./trader.controller.js";
const traderRouter = Router();

traderRouter.get("/traders", getAllTraders);

export default traderRouter;