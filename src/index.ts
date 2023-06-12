import dotenv from "dotenv";
import express from "express";
import Router from "./routes/index.routes";
import cors from "cors";
dotenv.config();

const app = express();

const port = process.env.PORT;
app.use(express.json());
app.use(cors())
app.use("/", Router);
app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
