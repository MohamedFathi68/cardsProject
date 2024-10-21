import { Router } from "express";
import { addUser, deleteUser, getAllUsers, getUsersByName } from "./user.controller.js";
const userRouter = Router();

userRouter.get("/users", getAllUsers);
userRouter.get("/users/:search", getUsersByName);
userRouter.post("/users", addUser);
userRouter.delete("/users/:id", deleteUser);

export default userRouter;