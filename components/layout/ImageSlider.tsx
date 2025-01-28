'use client';
import React, {useState, useEffect} from "react";
import Image  from "next/image";


interface Slide {
    imageUrl: string;
    title: string;
    description: string;
}

const ImageSlider:React.FC = () => {
    const slides: Slide[] = [
        {
            imageUrl: '/images/slides1.jpg',
            title:'Welcome to Our Bookstore',
            description: 'Discover a world of captivating stories and knowledge. Explore our vast collection of books today.',
        },
        {
            imageUrl: '/images/slides1.jpg',
            title:'Welcome to Our Bookstore',
            description: 'Discover a world of captivating stories and knowledge. Explore our vast collection of books today.',
        },
        {
            imageUrl: '/images/slides1.jpg',
            title:'Welcome to Our Bookstore',
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
}