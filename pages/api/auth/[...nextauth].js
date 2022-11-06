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
import axios from "axios";
import { hash, compare } from 'bcryptjs';

export async function verifyPassword(password, hashedPassword) {
  const isValid = await compare(password, hashedPassword);
  return isValid;
}


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
            clientId: process.env.TWITTER_CLIENT_ID,
            clientSecret: process.env.TWITTER_CLIENT_SECRET,
/*             version: "2.0" */
        }),
         CredentialsProvider({
          name: 'credentials',
          credentials: {
            email: {label: "Email", type:"email", placeholder:"jsmith@example.com"},
            password: {label: "Password", type:"password"},
          },
          authorize: async (credentials) => {
            const user = await axios.post('https://www.atlastattoo.tech/api/credentials/login',
            {
              user: {
                password: credentials.password,
                email: credentials.email
              }
            },
            {
              headers: {
                accept: '*/*',
                'Content-Type': 'application/json'
              }
            })
    
          if (user && await verifyPassword(credentials.password, user.data.password)) {
            return user.data
          } else {
            return null
          }
        }
          })
    ],
    pages: {
      signIn: '/signin',
      signOut: '/signout',
      //newUser: '/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
    }
}

/* const callbacks = {
  // Getting the JWT token from API response
  async jwt(token, user) {
    if (user) {
      token.accessToken = user.token
    }

    return token
  },

  async session(session, token) {
    session.accessToken = token.accessToken
    return session
  }
} */

  export default (req, res) => NextAuth(req, res, options)