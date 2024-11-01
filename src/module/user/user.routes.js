import { Router } from "express";
import { addUser, deleteUser, getAllUsers, getUserByResponsibleName, getUsersByName, updateUser } from "./user.controller.js";
const userRouter = Router();

userRouter.get("/users", getAllUsers);
userRouter.get("/users/:search", getUsersByName);
userRouter.get("/users/res/:searchRes", getUserByResponsibleName);
userRouter.post("/users", addUser);
userRouter.put("/users/:id", updateUser);
userRouter.delete("/users/:id", deleteUser);

export default userRouter;