
import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import { getExistingUser, createUser } from "../nextjs_ecommerce/lib/api";
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],

  callbacks: {
    async signIn({ profile }) {
      try {
        const email = profile?.email;
        const first_name = profile?.given_name;
        const last_name = profile?.family_name;
        const username = email?.split("@")[0];
        const profile_picture_url = profile?.picture;

        const userObject = {
          data: { email, first_name, last_name, username, profile_picture_url }
        };

        if (!email || !first_name || !last_name || !username || !profile_picture_url) {
          console.error("Missing required profile information");
          return false;
        }

        // try {
        //   await getExistingUser(email);
        // }
        // catch (error) {
        //   console.log("User does not exist, proceed to create a new user.", error);

        //   await createUser(userObject)
        // }



        return true;

      } catch (error) {
        console.error("Error during sign-in:", error);
        return false;
      }
    },
  },
});