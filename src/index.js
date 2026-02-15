import dotenv from "dotenv";
import app from "./app.js";
import { connectDB } from "./config/db.js";

dotenv.config();

const startServer = async () => {
  await connectDB()
  const port = process.env.PORT || 5000;

  app.listen(port, () => {
    console.log(`LINKER server running is ${port}`);
  })
}

startServer()