import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: AuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email", placeholder: "admin@example.com" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
              if(!credentials || !credentials.email || !credentials.password){
                throw new Error("Missing email or password");
              }

              const adminEmail = process.env.ADMIN_EMAIL;
              const adminPassword = process.env.ADMIN_PASSWORD;


              if(credentials.email === adminEmail && credentials.password === adminPassword) {
                return {id: "1", name: "Admin", email: credentials.email};


                throw new Error("Invalid credentials");
              }
            },
        }),
    ],
    pages: {
        signIn: "/auth/signin", 
    },
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: "jwt", 
    },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
