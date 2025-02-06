import React from "react";
import Image from "next/image";

interface Book {
    id: number;
    title: string;
    imageUrl: string;
    price: number;
}

const LatestAdditions: React.FC = () => {
    const books: Book[] = [
        {
            id: 1,
            title: "Lily Day",
            imageUrl: "/images/book1.png",
            price: 5,
        },
        {
            id: 2,
            title: "Ekusher Upohar",
            imageUrl: "/images/book2.png",
            price: 5,
        },
        {
            id: 3,
            title: "Murgir Chanapona",
            imageUrl: "/images/book3.png",
            price: 5,
        },
    ];

    return (
        <div className="w-full px-6 md:px-20 py-8 bg-[#FFEED6] flex flex-col items-center relative">
            {/* Background Shape */}
            <div className="absolute bottom-0 w-full h-1/2 bg-[#DE3D3A] rounded-3xl z-0 mx-auto max-w-[calc(100%-40px)] md:max-w-[calc(100%-164px)]" />

            {/* Title */}
            <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-8 text-center text-red-600 z-10">
                Our Latest Additions
            </h2>

            {/* Books Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 z-10">
                {books.map((book) => (
                    <div key={book.id} className="relative   rounded-lg p-6 flex flex-col items-center text-center">
                        {/* Book Image */}
                        <div className="relative w-full h-80 md:h-96 mb-4">
                            <Image
                                src={book.imageUrl}
                                alt={book.title}
                                layout="fill"
                                objectFit="cover"
                                className="rounded-md"
                            />
                        </div>

                        {/* Book Title */}
                        <h3 className="text-lg font-semibold mb-2">{book.title}</h3>

                        {/* Price */}
                        <p className="text-gray-700 mb-4">${book.price.toFixed(2)}</p>

                        {/* Add to Cart Button */}
                        <button className="bg-[#FFEED6] hover:bg-[#F7B86D] text-black font-bold py-3 px-6 md:py-4 md:px-12 rounded-full transition duration-300">
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LatestAdditions;
