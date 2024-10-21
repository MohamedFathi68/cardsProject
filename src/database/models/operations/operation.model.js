import { model, Schema, Types } from "mongoose";

const operationSchema = new Schema({
  
  user: {
    type: Types.ObjectId,
    ref: 'User'
  },
  cost:{
    type: Number,
    required: true,
  }
  ,

  date:{
    type: Types.Date,
    default: Date.now,
  }
},{versionKey: false, timestamps: true});

export const operatinModel = model("Operatin", operationSchema);