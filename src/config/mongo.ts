import dotenv from "dotenv";
import { connect } from "mongoose";

dotenv.config()

async function dbConnect() {
  const MONGODB_URL_STRING = process.env.MONGODB_URL_STRING as string
  try {
    await connect(MONGODB_URL_STRING)
    console.log("Database connected successfully")
  } catch (err) {
    console.error("Database connection error:", err)
  }
}


export default dbConnect