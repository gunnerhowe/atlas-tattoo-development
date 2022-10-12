import NextAuth from 'next-auth';
//import Providers from 'next-auth/providers';
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from '../../../lib/mongodb';
import GoogleProvider from "next-auth/providers/google";
import Auth0Provider from "next-auth/providers/auth0";
import AppleProvider from "next-auth/providers/apple";
import TwitterProvider from "next-auth/providers/twitter";

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
 /*       TwitterProvider({
            clientId: process.env.TWITTER_CLIENT_ID,
            clientSecret: process.env.TWITTER_CLIENT_SECRET
        }),
        AppleProvider({
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
    ]
}

/* GoogleProvider({
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
  })  */

/*   Auth0Provider({
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    issuer: process.env.ISSUER,
    authorization: { params: { scope: "openid your_custom_scope" } },
  }) */

  export default (req, res) => NextAuth(req, res, options)
/*   export default NextAuth({
    adapter: MongoDBAdapter(clientPromise),
    providers: options
  }) */