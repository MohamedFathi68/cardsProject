import { model, Schema, Types } from "mongoose";

const traderSchema = new Schema({
  name: {
    type: String,
    required: true,
  }
},{versionKey: false , timestamps: false});

export const traderModel = model("Trader", traderSchema);