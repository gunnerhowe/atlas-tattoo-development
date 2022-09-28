import NextAuth from 'next-auth';
//import Providers from 'next-auth/providers';
import GoogleProvider from "next-auth/providers/google"
import Auth0Provider from "next-auth/providers/auth0"
import AppleProvider from "next-auth/providers/apple";
import TwitterProvider from "next-auth/providers/twitter";

 const options = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
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
        // Return all the profile information you need.
        // The only truly required field is `id`
        // to be able identify the account when added to a database
      }
    },
  }) */

/*   Auth0Provider({
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    issuer: process.env.ISSUER,
    authorization: { params: { scope: "openid your_custom_scope" } },
  }) */

  export default (req, res) => NextAuth(req, res, options)