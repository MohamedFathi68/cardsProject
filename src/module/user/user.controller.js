import { userModel } from "../../database/models/user/user.model.js";

let getAllUsers = async (req, res) => {
  let users = await userModel.find().populate("trader" , "-_id -users ");  
  res.status(200).json({message:"Succcess", users})
};

let addUser= async (req, res) => {
  let user = await userModel.insertMany(req.body);
  res.status(201).json({ message: "User Created", user });
};

export { getAllUsers, addUser};
