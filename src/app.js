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

if (process.env.NODE_ENV === "production") {
  app.use(express.static(join(__dirname, "..", "client", "build")));

  app.get("*", (req, res) => {
    res.sendFile(join(__dirname, "..", "client", "build", "index.html"));
  });
}
export default app;
