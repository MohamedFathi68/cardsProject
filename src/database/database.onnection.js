import mongoose from "mongoose";

export const connection = mongoose
  .connect(
    // "mongodb+srv://mohamedfathi68:POFk6zOhciyHUz5d@cluster0.uhqg8fv.mongodb.net/cardsProject"
    "mongodb://localhost:27017/cardsProject"
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
