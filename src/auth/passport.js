import { OAuth2Strategy as GoogleStrategy } from 'passport-google-oauth';
import passport from 'passport';
const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = process.env;

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: 'http://localhost:8080/auth/google/callback'
}, (access_token, refresh_token, profile, done) => {
    console.log(profile);
    return done(null, profile);
}
));


export default passport;
