"use client";
import {signIn} from "next-auth/react";

export default function SignInPage() {
    return (
        <div className="text-center">
            <h1 className="text-2xl font-bold">Admin Sign In</h1>
            <button
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
                onClick={() => signIn("google")}
            >
                Sign In with Google

            </button>

        </div>
    );
}