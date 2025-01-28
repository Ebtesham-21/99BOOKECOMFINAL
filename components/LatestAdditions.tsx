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
}