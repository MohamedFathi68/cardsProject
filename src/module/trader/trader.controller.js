import { traderModel } from "../../database/models/trader/trader.model.js";

let getAllTraders= async (req, res) => {
  let traders = await traderModel.find() 
  res.status(200).json({message:"Succcess", traders})
};

export { getAllTraders };
