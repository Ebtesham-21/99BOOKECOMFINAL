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
            imageUrl: "/images/book1.jpg",
            price: 5,

        },
        {
            id: 2,
            title: "Ekusher Upohar",
            imageUrl: "/images/book1.jpg",
            price: 5,

        },
        {
            id: 2,
            title: "Murgir Chanapona",
            imageUrl: "/images/book1.jpg",
            price: 5,

        },

    ];


    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold mb-4">Our Latest Additions</h2>
            <div className="flex space-x-4">
                {books.map((book) => (
                    <div key= {book.id} className="bg-white rounded-lg shadow-md p-4 w-1/3" >
                        <div
                            className="relative h-48 mb-4">
                                <Image
                                    src={book.imageUrl}
                                    alt={book.title}
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-md"
                                />
                        </div>
                        <h3 className="text-lg font-semibold mb-2">{book.title}</h3>
                        <p className="text-gray-700 mb-2">Price: ${book.price.toFixed(2)}</p>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Add to Cart
                        </button>
                    </div>
                ))}

            </div>
        </div>
    );


    
};

export default LatestAdditions;