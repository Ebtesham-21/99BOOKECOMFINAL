"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp, FaYoutube } from "react-icons/fa";

const Footer: React.FC = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [showModal, setShowModal] = useState(false);

    const handleSubscribe = async (event: React.FormEvent) => {
        event.preventDefault(); // Prevents page reload on form submit

        try {
            const response = await fetch("/api/subscribe", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Subscription failed");
            }

            setMessage("Subscription successful!");
            setShowModal(true); // Show modal on success
        } catch (error: any) {
            console.error("Subscription Error:", error);
            setMessage(error.message);
        }
    };

    return (
        <footer className="bg-[#3A2E92] text-white pt-56 px-20 pb-8 text-center">
            <h3 className="text-6xl font-semibold">Subscribe to our Newsletter</h3>
            <form onSubmit={handleSubscribe} className="mt-4 flex flex-col items-center">
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="px-4 py-2 rounded-full text-black w-[600px] h-[50px]"
                    required
                />
                <button type="submit" className="mt-4 bg-yellow-500 px-6 py-2 rounded-full font-bold">
                    Subscribe
                </button>
            </form>
            {message && <p className="mt-4">{message}</p>}

            {/* Popup Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white text-black p-6 rounded-lg shadow-lg text-center w-80 transition-all">
                        <h2 className="text-xl font-semibold mb-2">Thank You!</h2>
                        <p className="text-lg">Subscribed successfully</p>
                        <button
                            onClick={() => setShowModal(false)}
                            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-full font-bold"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}

            {/* Logo & Social Icons Section */}
            <div className="flex flex-col md:flex-row justify-between items-center w-full mt-20">
                <Link href="/" className="flex items-center mb-6 md:mb-0">
                    <Image src="/logo.png" alt="BookStore Logo" width={200} height={200} className="w-40 md:w-52" />
                </Link>

                <div className="flex space-x-4">
                    <Link href="#" className="hover:text-yellow-500">
                        <FaFacebook size={32} />
                    </Link>
                    <Link href="#" className="hover:text-yellow-500">
                        <FaInstagram size={32} />
                    </Link>
                    <Link href="#" className="hover:text-yellow-500">
                        <FaYoutube size={32} />
                    </Link>
                    <Link href="#" className="hover:text-yellow-500">
                        <FaWhatsapp size={32} />
                    </Link>
                    <Link href="#" className="hover:text-yellow-500">
                        <FaLinkedin size={32} />
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
