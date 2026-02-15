import dotenv from "dotenv";
import app from "./app.js";
import { connectDB } from "./config/db.js";

dotenv.config();

const startServer = async () => {
  await connectDB();

  const port = process.env.PORT || 5000;

  // detect if running in Vercel
  if (!process.env.VERCEL) {
    app.listen(port, () => {
      console.log(`Server running at :${port}`);
    });
  }
};

startServer();

export default app;  // optional, serverless জন্য
