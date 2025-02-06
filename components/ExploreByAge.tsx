import React from "react";
import Image from "next/image";

interface AgeCategory {
    id: number;
    title: string;
    imageUrl: string;
}

const ExploreByAge: React.FC = () => {
    const ageCategories: AgeCategory[] = [
        { id: 1, title: "Ages 0-4", imageUrl: "/images/age0.png" },
        { id: 2, title: "Ages 5-8", imageUrl: "/images/age5.png" },
        { id: 3, title: "Ages 9-12", imageUrl: "/images/age9.png" },
        { id: 4, title: "Ages 13+", imageUrl: "/images/age13.png" },
    ];

    return (
        <div className="w-full py-16 bg-[#3A2E92] text-white flex flex-col items-center">
            {/* Title */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center text-[#F5D36B]">
                Explore Books By Age
            </h2>

            {/* Age Categories Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl px-6">
                {ageCategories.map((category) => (
                    <div key={category.id} className="flex flex-col items-center">
                        {/* Image */}
                        <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mb-4">
                            <Image
                                src={category.imageUrl}
                                alt={category.title}
                                layout="fill"
                                objectFit="contain"
                                className="rounded-md"
                            />
                        </div>

                        {/* Button */}
                        <button className="bg-white hover:bg-red-600 text-red-600 hover:text-black font-semibold py-3 px-6 md:px-8 rounded-full w-full sm:w-auto transition duration-300">
                            {category.title}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ExploreByAge;
