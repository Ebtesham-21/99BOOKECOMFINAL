    // components/WhyAreWeSpecialContent.tsx
    'use client'
    import React from "react";
    import Image from "next/image";

    interface Feature {
        id: number;
        title: string;
        description: string;
        imageUrl: string;
    }

    interface WhyAreWeSpecialProps {
        features: Feature[];
    }

    const WhyAreWeSpecialContent: React.FC<WhyAreWeSpecialProps> = ({ features }) => {
        return (
            <div className="w-full flex flex-col items-center text-white">
                <div className="w-full bg-[#FFEED6]">
                    <div className=" bg-[#B32025] rounded-b-[65px] mx-[120px] mb-[85px] px-8 py-8">
                        <h2 className="text-5xl font-bold mb-8 text-center text-[#F5D36B]">
                            WHY ARE WE SPECIAL
                        </h2>
                        <div className="w-full max-w-6xl">
                            {features.map((feature) => (
                                <div key={feature.id} className="flex items-start py-4">
                                    <div className="relative w-[508px]  h-[303px] mr-4 flex-shrink-0">
                                        <Image
                                            src={feature.imageUrl}
                                            alt={feature.title}
                                            layout="fill"
                                            objectFit = "contain"
                                            className="rounded-[25px]"
                                        />
                                    </div>
                                    <div className="flex flex-col">
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
        );
    };

    export default WhyAreWeSpecialContent;