    // components/BookBundles.tsx
    "use client";
    import React, { useState } from "react";
    import Image from "next/image";
    import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

    interface Bundle {
        id: number;
        title: string;
        imageUrl: string;
        price: number;
    }

    const BookBundles: React.FC = () => {
        const allBundles: Bundle[] = [
            {
                id: 1,
                title: 'Bundle 1',
                imageUrl: '/images/book1.png',
                price: 29.99,
            },
            {
                id: 2,
                title: 'Bundle 2',
                imageUrl: '/images/book2.png',
                price: 39.99,
            },
            {
                id: 3,
                title: 'Bundle 3',
                imageUrl: '/images/book3.png',
                price: 49.99,
            },
            {
              id: 4,
              title: 'Bundle 4',
              imageUrl: '/images/book1.png',
              price: 29.99,
            },
            {
                id: 5,
                title: 'Bundle 5',
                imageUrl: '/images/book2.png',
                price: 39.99,
             },
            {
               id: 6,
                title: 'Bundle 6',
              imageUrl: '/images/book3.png',
                price: 49.99,
            },
        ];

        const [startIndex, setStartIndex] = useState(0);
        const visibleBundles = 3;

        const handlePrev = () => {
            setStartIndex(Math.max(0, startIndex - 1));
        };

        const handleNext = () => {
            setStartIndex(Math.min(allBundles.length - visibleBundles, startIndex + 1));
        };

        const currentBundles = allBundles.slice(startIndex, startIndex + visibleBundles);

        return (
            <div className="w-full bg-[#3A2E92] px-4 py-8 flex flex-col items-center justify-center text-white">
                 <h2 className="text-5xl font-bold mt-6 text-center text-[#F5D368]">
                    BOOK BUNDLES
                </h2>
                <div className="relative w-full max-w-7xl">
                    <div className="flex bg-[#FFE6DF] rounded-md p-4 space-x-4 justify-center w-full overflow-hidden">
                        {currentBundles.map((bundle) => (
                             <div key={bundle.id} className="flex flex-col items-center  p-4 w-1/3">
                                <div className="relative h-[250px] w-[250px] mb-4">
                                    <Image
                                        src={bundle.imageUrl}
                                        alt={bundle.title}
                                        layout="fill"
                                        objectFit="contain"
                                        className="rounded-md"
                                    />
                                </div>
                                <h3 className="text-2xl text-black font-semibold mb-2 text-center">{bundle.title}</h3>
                                 <p className="text-xl text-center text-black">Price: {bundle.price.toFixed(2)}</p>
                             </div>
                         ))}
                    </div>
                    <button
                    onClick={handlePrev}
                    className={`absolute left-0 top-1/2 transform -translate-y-1/2 p-2 text-black disabled:opacity-30 disabled:cursor-not-allowed`}
                     disabled={startIndex <= 0}
                    >
                       <AiOutlineLeft size={30} />
                   </button>
                    <button
                       onClick={handleNext}
                        className={`absolute right-0 top-1/2 transform -translate-y-1/2 p-2  disabled:opacity-30 disabled:cursor-not-allowed text-black`}
                       disabled={startIndex >= allBundles.length - visibleBundles}
                    >
                         <AiOutlineRight size={30} />
                    </button>
                </div>
            </div>
        );
    };

    export default BookBundles;