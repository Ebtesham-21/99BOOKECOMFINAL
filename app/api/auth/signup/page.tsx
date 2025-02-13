"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";


const SignUp = () => {
    const router = useRouter();
    const [form, setForm] = useState({email: "", password: ""});
    const [error, setError] = useState("");


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({...form, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        const res = await fetch("/api/auth/signup", {
            method: "POST",
            header: {"Content-Type" : "application/json"},
            body: JSON.stringify(form),
        });

        if(res.ok) {
            router.push("/auth/signin");
        } else {
            const data = await res.json();
            setError(data.message);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-6 rounded shadow-md w-96">
                <h2 className="text-2xl font-bold mb-4 ">Sign Up</h2>
                {error && <p className="text-red-500">{error}</p>}
                <form onSubmit={handleSubmit}>
                    <input 
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="border p-2 w-full mb-3"

                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={form.password}
                        onChange={handleChange}
                        required
                        className="border p-2 w-full mb-3"
                    />

                    <button
                        type="submit"
                        className="bg-blue-500 text-white w-full py-2"
                    >
                        Sign Up
                    </button>
                </form>
            </div>

        </div>
    );
};

export default SignUp;