import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaYoutube, FaWhatsapp, FaLinkedin } from "react-icons/fa";


const Footer: React.FC = () => {
    return (
        <footer className="bg-[#3A2E92] text-white pt-64 pb-12">
            <div className="container mx-auto px-4 flex flex-col">
                {/* NewsLetter Section      */}
                <div className="text-center mb-8">
                    <h3 className="text-6xl font-semibold mb-4">
                        Subscribe to our Newsletter
                    </h3>

                    <form className="flex justify-center rounded-md">
                        <input 
                            type="email"
                            placeholder="Email"
                            className="text-black px-6 py-2 rounded-full focus:outline-none w-96 text-4xl"
                        />
                        {/* <button type="submit" className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-r-md font-semibold">
                            Subscribe
                        </button> */}

                    </form>
                </div>
                <div className="flex justify-between items-center mt-40">
                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <Image src="/logo.png" alt="BookStore Logo" width={400} height={400} />
                    
                    </Link>

                    <div className="flex space-x-4">
                        <Link href="#" className="hover:text-yellow-500">
                            <FaFacebook size={52}/>
                        </Link>
                        <Link href="#" className="hover:text-yellow-500">
                            <FaInstagram size={52}/>
                        </Link>
                        <Link href="#" className="hover:text-yellow-500">
                            <FaYoutube size={52}/>
                        </Link>
                        <Link href="#" className="hover:text-yellow-500">
                            <FaWhatsapp size={52}/>
                        </Link>
                        <Link href="#" className="hover:text-yellow-500">
                            <FaLinkedin size={52}/>
                        </Link>

                    </div>


                </div>
            </div>

        </footer>
    );
};

export default Footer;