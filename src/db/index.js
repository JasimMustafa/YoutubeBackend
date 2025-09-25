import mongoose from "mongoose";
import { DB_NAME } from "./constants";

const connectDb = async () => {
  try {
    const DBconnection = await mongoose.connect(
      `${process.env.MONGO_URI}/${DB_NAME}`
    );
    console.log(
      `Database connected sucessfully ! DB Host : ${DBconnection.connection.host} `
    );
    console.log(
      `Assignment checking what is this store or what is this ${DBconnection} `
    );
  } catch (error) {
    console.error("Database Connection Error ", error);
    process.exit(1);
  }
};
export default connectDb;
