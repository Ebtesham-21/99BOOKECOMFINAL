import React from "react";
import Image from "next/image";

interface Feature {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
}

const WhyAreWeSpecial: React.FC = () => {
    const features: Feature[] = [
        {
            id: 1, 
            title: 'Digital Connectivity',
            description: "All content in our books comes with a QR code which when scanned will play digital rhymes and digital storytelling videos through beautiful animations.",
            imageUrl:'/images/feature1.png',

        },
        {
            id: 2,
            title: 'More Engagement',
            description:
                "Each book will have a coloring section on a few pages related to the story and poem which will make children more engaged with this book.",


            imageUrl: '/images/feature2.png',
        },
        {
            id: 3,
             title: 'Gifts',
            description:
                'A color box will be provided with every set of 5 books to color in the coloring sections of the book.',
            imageUrl: '/images/feature3.png',
        },
        {
             id: 4,
             title: '99 School',
             description:
                'There will also be QR codes in the coloring section of the books. After scanning here will play a video from 99 School, where the ideal mentor for children will color the books in a very fun way.',
            imageUrl: '/images/feature4.png',
        },
        {
             id: 5,
             title: 'Extreme Enjoyment',
             description:
                'Children will have a great fun by reading, drawing, listening and learning from a single book! With all the exciting fun activities, each book will become a way of extreme enjoyment for children.',
            imageUrl: '/images/feature5.png',
        },
    ];


    return (
        <div className="w-full  flex flex-col items-center  text-white">
            <div className="w-full bg-[#FFEED6] ">
            <div className=" bg-[#B32025] rounded-b-2xl mx-[120px] mb-[84px]  px-8 py-8">
            <h2 className="text-5xl font-bold mb-8 text-center text-[#F5D36B]">
                WHY ARE WE SPECIAL
            </h2>
            <div className="w-full max-w-6xl flex flex-col items-center ">
                {features.map((feature) => (
                    <div key={feature.id} className="flex  items-start justify-center py-4">
                        <div className="relative w-[508px]  h-[303px] mr-4 flex-shrink-0">
                            <Image 
                                src={feature.imageUrl}
                                alt={feature.title}
                                layout="fill"
                                objectFit = "contain"
                                className="rounded-md"
                            />

                        </div>
                        <div className="flex flex-col py-12">
                            <h3 className="text-3xl font-semibold mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-lg">{feature.description}</p>

                        </div>
                    </div>
                ))}
            </div>
        </div>
        </div>
        </div>
    )


    };

export default WhyAreWeSpecial;