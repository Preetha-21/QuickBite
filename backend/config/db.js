import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose.connect(
    "db password"
  );
  console.log("DB CONNECTED");
};