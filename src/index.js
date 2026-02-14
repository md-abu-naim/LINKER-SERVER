
import dotenv from "dotenv";

dotenv.config();

const startServer = async () => {
  // await conncetDB()

  app.listen(process.env.PORT, () => {
    console.log(`LINKER server running is ${process.env.PORT}`);
  })
}

startServer()