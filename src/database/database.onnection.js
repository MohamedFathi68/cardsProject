import mongoose from "mongoose"
import 'dotenv/config'


export const connection = mongoose
  .connect(
    process.env.DEV_CONNECTION_STRING || process.env.PROD_CONNECTION_STRING
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
