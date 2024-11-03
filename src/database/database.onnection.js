import mongoose from "mongoose"
import 'dotenv/config'


export const connection = mongoose
  .connect(
    process.env.DEV_CONNECTION_STRING || process.env.PRODUCTION_CONNECTION_STRING || "mongodb+srv://mohamedfathi68:POFk6zOhciyHUz5d@cluster0.uhqg8fv.mongodb.net/cardsProject"
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
