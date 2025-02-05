import React from "react";
import Image from "next/image";

interface Book {
    id: number;
    title: string;
    imageUrl: string;
    price: number;
}


const LatestAdditions: React.FC = () => {
    const books: Book[] = [
        {
            id: 1,
            title: "Lily Day",
            imageUrl: "/images/book1.png",
            price: 5,

        },
        {
            id: 2,
            title: "Ekusher Upohar",
            imageUrl: "/images/book2.png",
            price: 5,

        },
        {
            id: 3,
            title: "Murgir Chanapona",
            imageUrl: "/images/book3.png",
            price: 5,

        },

    ];


    return (
        <div className="w-full  px-4 py-8 bg-[#FFEED6] items-center justify-center relative ">
            
            <div className="absolute bottom-0 mb-[85px]  w-full w-[calc(100%-164px)] mx-[82px] h-1/2 bg-[#DE3D3A] rounded-3xl z-5"> </div>
            <h2 className="text-8xl font-bold mb-4 text-center text-red-600  ">Our Latest Additions</h2>
            <div className="flex mx-[82px] mb-[90px]   z-10">
                {books.map((book) => (
                    <div key= {book.id} className=" rounded-lg relative  p-4 w-1/3  items-center " >
                        <div
                            className="relative h-[600px] mb-4">
                                <Image
                                    src={book.imageUrl}
                                    alt={book.title}
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-md"
                                />
                        </div>
                        <h3 className="text-lg text-white font-semibold mb-2 text-center">{book.title}</h3>
                        <p className="text-white mb-2 text-center"> ${book.price.toFixed(2)}</p>
                        <div className="flex justify-center">
                            <button className="bg-[#FFEED6] hover:bg-[#F7B86D]  text-black font-bold py-4 px-12 rounded-full flex justify-center ">
                                Add to Cart
                            </button>
                        </div>
                       
                    </div>
                ))}

            </div>
        </div>
     
    );


    
};

export default LatestAdditions;