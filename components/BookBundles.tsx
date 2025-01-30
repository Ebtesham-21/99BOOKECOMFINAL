import React, { useState } from "react";
import Image from "next/image";

interface Bundle {
    id: number;
    title: string;
    imageUrl: string;
    price: number;
}

const BookBundles: React.FC = () => {
    const bundles: Bundle[] = [
        {
            id: 1,
            title: 'Bundle 1',
            imageUrl: '/images/bundle1.png',
            price: 29.99,
        },
         {
            id: 2,
            title: 'Bundle 2',
            imageUrl: '/images/bundle2.png',
            price: 39.99,
        },
         {
            id: 3,
            title: 'Bundle 3',
            imageUrl: '/images/bundle3.png',
            price: 49.99,
        },
        {
            id: 4,
            title: 'Bundle 4',
            imageUrl: '/images/bundle1.png',
            price: 29.99,
        },
         {
            id: 5,
            title: 'Bundle 5',
            imageUrl: '/images/bundle2.png',
            price: 39.99,
        },
         {
            id: 6,
            title: 'Bundle 6',
            imageUrl: '/images/bundle3.png',
            price: 49.99,
        },
    ];


    const [startIndex, setStartIndex] = useState(0);
    const visibleBundles = 3;

    const handlePrev = () => {
        setStartIndex(Math.max(0, startIndex - 1));
    }

    const handleNext = () => {
        setStartIndex(Math.min(BookBundles.length - visibleBundles, startIndex + 1));
    };




    return (
        <div className="w-full px-4 py-8 flex flex-col items-center justify-center text-white">
            <h2 className="text-5xl font-bold mb-8 text-center text-[#F5D368]">
                BOOK BUNDLES
            </h2>
            <div className="flex space-x-4 justify-center w-full max-w-7xl" >
                { bundles.map((bundle) => (
                    <div key={bundle.id} className="flex flex-col items-center bg-gray-700 rounded-lg p-4 w-1/3">
                        <div className="relative h-[250px] w-[250px] mb-4">
                            <Image
                                src={bundle.imageUrl}
                                alt={bundle.title}
                                layout="fill"
                                
                                className="rounded-md"
                            />
                        </div>
                        <h3 className="text-2xl font-semibold mb-2 text-center">{bundle.title}</h3>
                        <p className="text-xl text-ccenter">{bundle.price.toFixed(2)}</p>
                        
                    </div>

                ))}
            </div>
        </div>
    );

};

export default BookBundles;