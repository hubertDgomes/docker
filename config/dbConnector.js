import mongoose from "mongoose";
import "dotenv/config";

const dbConnector = async () => {
  try {
    await mongoose
      .connect(`${process.env.MONGO_URL}`)
      .then(() => console.log("The database has been connected!"));
  } catch (err) {
    console.log(err);
  }
};

export default dbConnector;
