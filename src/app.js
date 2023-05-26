import express from "express";
import router from "./routes/index.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

app.use("/api/v1", router);

app.get("/", (req, res) => {
  res.send("Hello lighto!");
});

export default app;
