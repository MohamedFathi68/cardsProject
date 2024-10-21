import { Router } from "express";
import { addUser, deleteUser, getAllUsers } from "./user.controller.js";
const userRouter = Router();

userRouter.get("/users", getAllUsers);
userRouter.post("/users", addUser);
userRouter.delete("/users/:id", deleteUser);

export default userRouter;