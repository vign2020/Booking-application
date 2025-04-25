import mongoose from "mongoose";

export const connectionToDatabase = async () => {
  const MONGO_URL = "mongodb://localhost:27017/turf-application";

  // throw new Error("Could not connect .... ");
  try {
    console.log("connected to db ... ");
    await mongoose.connect(MONGO_URL);
  } catch (e) {
    console.log(e);
  }
};
