import { Router } from "express";
import { addUser, getAllUsers } from "./user.controller.js";
const userRouter = Router();

userRouter.get("/users", getAllUsers);
userRouter.post("/users", addUser);

export default userRouter;