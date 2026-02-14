import express from "express";
import cors from "cors";

const app = express();

const corsOptions = {
    origin: ['http://localhost:3000', 'https://linkerbd.vercel.app', 'https://linker-psi-ruddy.vercel.app'],
    credentials: true,
    optionSuccessStatus: 200
}

app.use(cors(corsOptions));
app.use(express.json());

app.use("/", routes);

export default app;
