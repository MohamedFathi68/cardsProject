import { model, Schema, Types } from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  members:  Number,
  amount: Number,
  trader: {
    type: Types.ObjectId,
    ref: 'Trader'
  },
  responsiblePerson: String
},{versionKey: false, timestamps: true});

export const userModel = model("User", userSchema);