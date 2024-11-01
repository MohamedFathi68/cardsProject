import { userModel } from "../../database/models/user/user.model.js";

let getAllUsers = async (req, res) => {
  let users = await userModel.find().populate("trader", "-_id -users ");
  res.status(200).json({ message: "Succcess", users });
};

let getUsersByName = async (req, res) => {
  let users = await userModel
    .find({ name: RegExp(req.params.search, "i") })
    .populate("trader", "-_id -users ").sort({ amount: "asc" , name: "asc" , trader: "asc" });
  res.status(200).json({ message: "Success", users });
};

let getUserByResponsibleName = async (req, res) => {
  let user = await userModel.find({
    responsibleName: RegExp(req.query.searchRes, "i")
  });
  res.status(200).json({ message: "Success", user });
};

let addUser = async (req, res) => {
  let user = await userModel.insertMany(req.body);
  res.status(201).json({ message: "User Created", user });
};

let deleteUser = async (req, res) => {
  let user = await userModel.findByIdAndDelete(req.params.id);
  res.status(200).json({ message: "User Deleted", user });
};

export { getAllUsers, getUsersByName, getUserByResponsibleName , addUser, deleteUser };
