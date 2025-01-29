import React from "react";
import Image from "next/image";
import exp from "constants";


interface AgeCategory{
    id: number;
    title: string;
    imageUrl: string;
}


const ExploreByAge: React.FC = () => {
    const ageCategories: AgeCategory[] = [
        {
            id: 1,
            title: "Ages 0-4",
            imageUrl: "/images/age0.png",
        }, 
        {
            id: 2,
            title: 'Ages 5-8',
            imageUrl: '/images/age5.png',
        },
        {
            id: 3,
            title: 'Ages 9-12',
            imageUrl: '/images/age9.png',
        },
        {
            id: 4,
            title: 'Ages 13+',
            imageUrl: '/images/age13.png',
        },
    ];


    return (
        <div className="w-fullp  py-32 flex flex-col items-center justify-center bg-[#3A2E92] text-white">
            <h2 className="text-5xl font-bold mb-8 text-center text-[#F5D36B]">
                Explore Books By Age

            </h2>
            <div className="flex space-x-4 justify-around w-full max-w-6xl">
                {ageCategories.map((category) => (
                    <div key={category.id} className="flex flex-col items-center">
                        <div className="relative h-[200px] w-[200px] mb-4">
                            <Image
                                src={category.imageUrl}
                                alt={category.title}
                                layout="fill"
                                objectFit="contain"
                                className="rounded-md"
                            />
                        </div>
                        <button className="bg-white hover:bg-red-600 text-red-600 hover:text-black font-semibold py-2 px-4 rounded-full w-full flex justify-center">
                            {category.title}
                        </button>
                    </div>
                ))}

            </div>

        </div>
    );
};


export default ExploreByAge;