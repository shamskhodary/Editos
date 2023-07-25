import express from "express";
import router from "./routes/index.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import { join } from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

app.use("/api/v1", router);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(join(__dirname, "..", "client", "build")));

  app.get("*", (req, res) => {
    res.sendFile(join(__dirname, "..", "client", "build", "index.html"));
  });
}
export default app;
