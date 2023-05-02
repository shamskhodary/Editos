import express from "express";
import router from "./routes/index.js";
import passport from "passport";
import Google_pass from "./auth/passport.js";
import session from "express-session";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: 'SECRET'
}));
app.use(passport.initialize());
app.use(passport.session());
app.use('/api/v1', router);



app.get('/', (req, res) => {
    res.send('Hello lighto!');
}
);

app.get('/auth/google',
    Google_pass.authenticate('google', { scope: ['profile', 'email'] }));

app.get('/auth/google/callback',
    Google_pass.authenticate('google', { failureRedirect: '/error' }),
    function (req, res) {
        // Successful authentication, redirect success.
        res.redirect('/');
    });

passport.serializeUser(function (user, cb) {
    cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
    cb(null, obj);
});



export default app;