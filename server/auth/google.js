// const passport = require('passport')
// const router = require('express').Router()
// const GoogleStrategy = require('passport-google-oauth2').Strategy
// const { models: { User }} = require('../db')
// require('dotenv').config()
// module.exports = router
// /**
//  * For OAuth keys and other secrets, your Node process will search
//  * process.env to find environment variables. On your production server,
//  * you will be able to set these environment variables with the appropriate
//  * values. In development, a good practice is to keep a separate file with
//  * these secrets that you only share with your team - it should NOT be tracked
//  * by git! In this case, you may use a file called `secrets.js`, which will
//  * set these environment variables like so:
//  *
//  * process.env.GOOGLE_CLIENT_ID = 'your google client id'
//  * process.env.GOOGLE_CLIENT_SECRET = 'your google client secret'
//  * process.env.GOOGLE_CALLBACK = '/your/google/callback'
//  */

// const googleConfig = {
//   clientID: process.env.GOOGLE_CLIENT_ID,
//   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//   callbackURL: "http://localhost:8080/auth/google/callback"
// }

// passport.use(new GoogleStrategy(googleConfig, (token, refreshToken, profile, done) => {
//   const googleId = profile.id
//   const name = profile.displayName
//   const email = profile.emails[0].value
//   return User.find({where: {googleId}})
//     .then(user => user
//       ? done(null, user)
//       : User.create({name, email, googleId})
//         .then(user => done(null, user))
//     )
//     .catch(done)
// }))
// router.get('/', passport.authenticate('google', {scope: 'email'}))
// router.get('/auth/google/callback', passport.authenticate('google', {
//   successRedirect: '/home',
//   failureRedirect: '/login'
// }))