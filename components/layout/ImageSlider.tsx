'use client';
import React, { useState, useEffect } from "react";
import Image from "next/image";

interface Slide {
    imageUrl: string;
    title: string;
    description: string;
}

const ImageSlider: React.FC = () => {
    const slides: Slide[] = [
        {
            imageUrl: '/images/slide1.png',
            title: "LET'S READ SOMETHING DIFFERENT",
            description: 'Discover a world of captivating stories and knowledge. Explore our vast collection of books today.',
        },
        {
            imageUrl: '/images/slide1.png',
            title: "Slide 2",
            description: 'Discover a world of captivating stories and knowledge. Explore our vast collection of books today.',
        },
        {
            imageUrl: '/images/slide1.png',
            title: "Slide 3",
            description: 'Discover a world of captivating stories and knowledge. Explore our vast collection of books today.',
        },
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 5000);

        return () => clearInterval(timer);
    }, [slides.length]);

    return (
        <div className="relative w-full h-[500px] md:h-[750px] lg:h-[955px] overflow-hidden">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute w-full h-full transition-opacity duration-700 ease-in-out ${
                        index === currentSlide ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                    {/* Background Image */}
                    <div className="absolute h-full w-full">
                        <Image
                            src={slide.imageUrl}
                            alt={`Slide ${index + 1}`}
                            layout="fill"
                            objectFit="cover"
                            className="object-cover"
                        />
                    </div>

                    {/* Text Content */}
                    <div className="absolute top-1/2 left-1/2 md:left-1/8 transform -translate-x-1/2 md:-translate-x-0 -translate-y-1/2 text-[#DA1725] max-w-lg z-10 text-center md:text-left px-6 md:pl-[151px]">
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-2">{slide.title}</h2>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ImageSlider;
