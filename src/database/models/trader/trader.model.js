import { model, Schema, Types } from "mongoose";

const traderSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  users: [{
    type: Types.ObjectId,
    ref: 'User'
  }],
},{versionKey: false});

export const userModel = model("Trader", traderSchema);