import { OAuth2Strategy as GoogleStrategy } from 'passport-google-oauth';
import passport from 'passport';
import findUserQuery from '../database/queries/findUserQuery.js';
import createUserQuery from '../database/queries/createUserQuery.js';
const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = process.env;

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: 'http://localhost:8080/auth/google/callback'
}, (access_token, refresh_token, profile, done) => {
    findUserQuery(profile.emails[0].value).then((user) => {
        if (user.rows[0]) {
            return done(null, user.rows[0]);
        } else {
            createUserQuery(profile.displayName, profile.emails[0].value, "*********")
                .then((user) => {
                    return done(null, user.rows[0]);
                }
                ).catch((err) => {
                    console.log(err, "CRAEATE USER ERROR")
                });
        }
    }).catch((err) => {
        console.log(err, "FIND USER ERROR");
    });
}
));


export default passport;
