"use client";
import Image from "next/image";
import Link from "next/link";
import React, {useState} from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp, FaYoutube } from "react-icons/fa";

const Footer: React.FC = () => {

    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [showModal, setShowModal] = useState(false);

    const handleSubscribe = async (e: React.FormEvent) => {
        e.preventDefault();

        if(!email){
            setMessage("Please enter a valid email.");
            return;
        }

        try {
            const response = await fetch("api/subscribe", {
                method: "POST",
                headers:{
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({email}),
            });

            const data = await response.json();

            if(response.ok){
                setMessage("Thanks for subscribing! Check your email.");
                setEmail("");
            } else {
                setMessage(data.error || "Subscription failed.");
            }
        } catch (error){
            setMessage("Something went wrong.Please try again.");
        }
    };

    return (
        <footer className="bg-[#3A2E92] text-white p-12 text-center">
            <h3 className="text-3xl font-semibold">Subscribe to our Newsletter</h3>
            <form onSubmit={handleSubscribe} className="mt-4 flex flex-col items-center">
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="px-4 py-2 rounded-full text-black w-96"
                    required
                />

                <button type="submit" className="mt-4 bg-yellow-500 px-6 py-2 rounded-full font-bold">
                    Subscribe

                </button>

            </form>
            {message && <p className="mt-4">{message}</p>}


            {/* popup modal */}

            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white ">

                    </div>
                </div>
            )}


                {/* Logo & Social Icons Section */}
                <div className="flex flex-col md:flex-row justify-between items-center w-full mt-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center mb-6 md:mb-0">
                        <Image src="/logo.png" alt="BookStore Logo" width={200} height={200} className="w-40 md:w-52" />
                    </Link>

                    {/* Social Icons */}
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
