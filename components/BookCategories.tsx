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
        {
            id: 1,
            title: 'Picture Books',
            imageUrl: '/images/picture.png',
            link: '/category/picture-books',
        },
        {
            id: 2,
            title: 'Story Books',
            imageUrl: '/images/story.png',
            link: '/category/story-books',
        },
        {
            id: 3,
            title: 'Coloring Books',
            imageUrl: '/images/coloring.png',
            link: '/category/coloring-books',
        },
        {
            id: 4,
            title: 'Rhyme Books',
            imageUrl: '/images/rhyme.png',
            link: '/category/rhyme-books',
        },
        {
             id: 5,
            title: 'Non-Fiction Books',
            imageUrl: '/images/nonfiction.png',
            link: '/category/non-fiction-books',
        },
        {
            id: 6,
            title: 'Teen Books',
            imageUrl: '/images/teen.png',
            link: '/category/teen-books',
        },
    ];


    return (
        <div className="w-full px-4 py-8 flex flex-col items-center justify-center bg-[#3A2E92] text-white">
            <h2 className="text-5xl font-bold mb-8 text-center text-[#F5D368]">
                EXPLORE BOOKS BY CATEGORY
            </h2>
            <div className="flex space-x-4 justify-around w-full max-w-7xl">
                {categories.map((category) => (
                    <div key={category.id} className="flex flex-col items-center w-1/6">
                        <Link href={category.link} className="relative h-[200px] w-[200px] mb-4" >
                            <Image
                                src={category.imageUrl}
                                alt={category.title}
                                layout="fill"
                                objectFit="contain"
                                className="rounded-md"
                            />
                        </Link>
                        {/* <Link href={category.link} className="bg-[#F5D368] hover:bg-[#E2BC5D] text-black font-semibold py-2 px-4 rounded-full w-full flex justify-center">
                            {category.title}
                        </Link> */}
                    </div>
                ))}

            </div>
        </div>
    );
};

export default BookCategories;