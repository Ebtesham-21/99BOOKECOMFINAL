"use client";

import {signIn} from "next-auth/react";
import { useState } from "react";


const SignInPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handleSignIn = async (e: React.FormEvent) => {
        e.preventDefault();
        const result = await signIn("credentials", {
            email,
            password,
            redirect: true,
            callbackUrl: "/admin",
        });

        if(!result?.ok) alert("Invalid credentials");
    };



    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-2xl font-bold mb-4">Admin Login</h1>
            <form onSubmit={handleSignIn} className="w-80 p-4 border rounded">
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-2 border mb-2"
                    required
                
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-2 border mb-2"
                    required
                />

            <button
                type="submit"
                className="bg-blue-500 text-white w-full p-2"
            >
                Sign In
            </button>
            </form>
           
        </div>

    );
};

export default SignInPage;