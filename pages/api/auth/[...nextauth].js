import NextAuth from 'next-auth';
//import Providers from 'next-auth/providers';
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from '../../../lib/mongodb';
import GoogleProvider from "next-auth/providers/google";
import Auth0Provider from "next-auth/providers/auth0";
import AppleProvider from "next-auth/providers/apple";
import TwitterProvider from "next-auth/providers/twitter";
import FacebookProvider from "next-auth/providers/facebook";
import CredentialsProvider from "next-auth/providers/credentials";
/* 
import { verifyPassword } from '../../../lib/auth';

const checkPassword = async () => {
  const newData = await fetch('/api/credentails/password')
}

const checkEmail = async () => {
  const newData = await fetch('/api/credentails/email')
} */


 const options = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            profile(profile) {
                return {
                  id: profile.sub,
                  name: profile.name,
                  email: profile.email,
                  image: profile.picture,
                }
              },
        }),
        FacebookProvider({
          clientId: process.env.FACEBOOK_CLIENT_ID,
          clientSecret: process.env.FACEBOOK_CLIENT_SECRET
        }),
        TwitterProvider({
            clientId: process.env.TWITTER_CONSUMER_KEY,
            clientSecret: process.env.TWITTER_CONSUMER_SECRET,
/*             version: "2.0" */
        }),
/*         CredentialsProvider({
          name: 'credentials',
          credentials: {
            username: {label: "Email", type:"email", placeholder:"jsmith@example.com"},
            password: {label: "Password", type:"password"},
          },
          authorize: (credentials) => {
            if (
              credentials.username === 'gunner@gmail.com',
              credentials.password === 'test'
            ) {
              return {
                id: 2,
                name: "Gunner",
                email: "test@gmail.com"
              }
            } */
/*             if(checkPassword && checkEmail) {
              return {
                name: checkEmail.name,
                email: checkEmail.email}
            } else {
              return null
            } */
/*           }
        }), */
        /*AppleProvider({
            clientId: process.env.APPLE_ID,
            clientSecret: process.env.APPLE_SECRET
        }),
         Providers.Email({
            server: {
                host: "",
                port: "",
                auth: {
                    user: "",
                    pass: ""
                }
            },
            from: "",
        }) */
    ],
    pages: {
      signIn: '/signin',
      signOut: '/signout',
      //newUser: '/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
    }
}

  export default (req, res) => NextAuth(req, res, options)