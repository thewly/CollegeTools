if(process.env.NODE_ENV != 'production'){
  console.log('this is NOT in production')
  require('dotenv').config()
}
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const path = require("path");
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const session = require('express-session')
const app = express();
const PORT = process.env.PORT || 3001;
const URL = process.env.NODE_ENV === 'production' ? 'https://igtbok-org.herokuapp.com' : 'http://localhost:3001'

const db = require('./models')

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: `${URL}/api/auth/google/callback`,
  scope: ['email']
},
function(accessToken, refreshToken, profile, done) {
  let userEmail = profile.emails[0].value
  let username = userEmail.slice(0, userEmail.indexOf('@'))
  let provider = profile.provider
  db.User.findOneAndUpdate({username: username, provider: 'google'}, {username: username, email: userEmail, provider: provider}, {upsert: true, useFindAndModify: false, new: true}, function(err, result){
    done(null, result._id)
  })
}))
passport.use(new FacebookStrategy({
    clientID: process.env.FACEBOOK_CLIENT_ID,
    clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    callbackURL: `${URL}/api/auth/facebook/callback`,
    profileFields: ['id', 'emails', 'name']
  },
  function(accessToken, refreshToken, profile, done) {
    let username = profile.username ? profile.username : profile.name.givenName + profile.name.familyName
    let userEmail = profile.email ? profile.email : ''
    let provider = profile.provider
    db.User.findOneAndUpdate({username: username, provider: provider}, {username: username, email: userEmail, provider: provider}, {upsert: true, useFindAndModify: false, new: true}, function(err, result){
      done(null, result._id)
    })
  }
));
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  // store: 'connect-mongodb-session', --MAY NEED TO ADD THIS LATER, BUT THIS BREAKS IF I TRY TO CHANGE IT.
}))
app.use(passport.initialize())
app.use(passport.session())

passport.serializeUser(function(user, done) {
  done(null, user);
});
passport.deserializeUser(function(user, done) {
  done(null, user);
});

// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/venuesDB", { useNewUrlParser: true })

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});


//heroku addons:create mongolab
