import { Router } from "express";
import { getAllUsers } from "./user.controller.js";
const userRouter = Router();

userRouter.get("/users", getAllUsers);

export default userRouter;