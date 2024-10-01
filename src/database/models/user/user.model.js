import { model, Schema, Types } from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  members:  Number,
  amount: Number,
  marked: [{
    type: Boolean,
    default: false,
  }],
  trader: {
    type: Types.ObjectId,
    ref: 'Trader'
  }
},{versionKey: false, timestamps: true});

export const userModel = model("User", userSchema);