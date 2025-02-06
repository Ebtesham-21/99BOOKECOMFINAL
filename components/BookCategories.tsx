import React from "react";
import Image from "next/image";
import Link from "next/link";

interface BookCategory {
    id: number;
    title: string;
    imageUrl: string;
    link: string;
}

const BookCategories: React.FC = () => {
    const categories: BookCategory[] = [
        { id: 1, title: "Picture Books", imageUrl: "/images/picture.png", link: "/category/picture-books" },
        { id: 2, title: "Story Books", imageUrl: "/images/story.png", link: "/category/story-books" },
        { id: 3, title: "Coloring Books", imageUrl: "/images/coloring.png", link: "/category/coloring-books" },
        { id: 4, title: "Rhyme Books", imageUrl: "/images/rhyme.png", link: "/category/rhyme-books" },
        { id: 5, title: "Non-Fiction Books", imageUrl: "/images/nonfiction.png", link: "/category/non-fiction-books" },
        { id: 6, title: "Teen Books", imageUrl: "/images/teen.png", link: "/category/teen-books" },
    ];

    return (
        <div className="w-full px-4 py-16 flex flex-col items-center bg-[#3A2E92] text-white">
            {/* Title */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center text-[#F5D368]">
                EXPLORE BOOKS BY CATEGORY
            </h2>

            {/* Categories Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 w-full max-w-7xl">
                {categories.map((category) => (
                    <div key={category.id} className="flex flex-col items-center">
                        {/* Image Link */}
                        <Link href={category.link} className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mb-4">
                            <Image
                                src={category.imageUrl}
                                alt={category.title}
                                layout="fill"
                                objectFit="contain"
                                className="rounded-md"
                            />
                        </Link>

                        {/* Category Button */}
                        <Link
                            href={category.link}
                            className="bg-[#F5D368] hover:bg-[#E2BC5D] text-black font-semibold py-2 px-6 rounded-full transition duration-300"
                        >
                            {category.title}
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BookCategories;
