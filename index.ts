import express, { Request, Response } from "express";
import cors from "cors";
import morgan from "morgan";
const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
import helloRoutes from "./routes/helloRoutes";

app.use("/", helloRoutes);
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
