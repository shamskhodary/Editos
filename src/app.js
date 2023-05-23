import express from "express";
import router from "./routes/index.js";
import passport from "passport";
import Google_pass from "./auth/passport.js";
import session from "express-session";
import tokenGen from "./middlewares/tokenGen.js";
import cookieParser from "cookie-parser";
import cors from "cors";
const app = express();

app.use(cors({ origin: "http://localhost:3000", credentials: true }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());
app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: "SECRET",
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use("/api/v1", router);

app.get("/", (req, res) => {
  res.send("Hello lighto!");
});

app.get(
  "/api/v1/auth/google",
  Google_pass.authenticate("google", {
    scope: ["profile", "email"],
    prompt: "consent",
  })
);

app.get(
  "/api/v1/auth/google/callback",
  Google_pass.authenticate("google", { failureRedirect: "/error" }),
  async (req, res) => {
    const token = await tokenGen({
      id: req.user.id,
      username: req.user.username,
    });

    res.cookie("tokie", token).status(201).redirect("/");
  }
);

passport.serializeUser(function (user, cb) {
  cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
  cb(null, obj);
});

export default app;
