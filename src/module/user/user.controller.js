import { userModel } from "../../database/models/user/user.model.js";

let getAllUsers = async (req, res) => {
  let users = await userModel.find();  
  res.status(200).json({message:"Succcess", users})
};

export { getAllUsers };
