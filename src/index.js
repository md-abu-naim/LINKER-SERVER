import dotenv from "dotenv";
import app from "./app.js";
import { connectDB } from "./config/db.js";

dotenv.config();

const startServer = async () => {
  await connectDB()

  app.listen(process.env.PORT, () => {
    console.log(`LINKER server running is ${process.env.PORT}`);
  })
}

startServer()