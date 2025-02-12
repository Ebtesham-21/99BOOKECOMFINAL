import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { signIn } from "next-auth/react";


export const authOptions = {
    providers: [
        CredentialsProvider ({
            name: "Credentials",
            credentials: {
                email: {label: "Email", type: "email", placeholder: "admin@example.com"},
                password: {label: "Password", type: "password"},
            },

            async authorize(credentials) {
                const adminEmail = process.env.ADMIN_EMAIL;
                const adminPassword = process.env.ADMIN_PASSWORD;

                if(credentials?.email === adminEmail && credentials?.password === adminPassword) {
                    return {id: "1", name: "Admin", email: credentials.email};
                }

                throw new Error("Invalid credentials");
 
            },
        }),
    ],
    page: {
        signIn: "/auth/signin",
    },
    secret: process.env.NEXTAUTH_SECRET,

};

const handler = NextAuth(authOptions);
export {handler as GET, handler as POST};