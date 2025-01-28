'use client'
import Link from 'next/link';
import { useState } from 'react';
import { AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai';
import { usePathname } from 'next/navigation';
import classNames from 'classnames';
import Image from 'next/image';

const Navbar = () => {
    const pathName = usePathname();
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    const handleSearchSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Searching For:', searchQuery);
        

};

return (
    <nav className=' mt-12 flex items-center justify-between'>
        {/* logo */}
        <div className=''>
            <Link href="/" className='flex items-start '>
                <Image src="/Logo-01.png" alt="BookStore Logo" width={400} height={400} />
            </Link>


        </div>
      

        {/* searchbar    */}
        <form onSubmit={handleSearchSubmit} className='flex flex-grow m-4 relative'>
            <input
                type="text"
                placeholder='Search Books'
                value={searchQuery}
                onChange={handleSearchChange}
                className='p-2 w-full rounded-1-md rounded-full border focus:outline text-black'
            />
            <button type="submit" className='absolute right-2 top-1/2 transform -translate-y-1/2 text-red-500 '>
                <AiOutlineSearch size={20}/>
            </button>
        </form>


        {/* Navigation Buttons */}
        <div className='flex items-center space-x-4 p-4'>
            <Link href="/" className={ classNames("text-black-300 hover:text-red-600", {"text-black": pathName === "/"})} >
                Home
            </Link>
            <Link href="/signup" className={classNames("text-black-300 hover:text-red-600", {"text-white": pathName === "/signup"})}>
                Signup/Login
            </Link>
            <Link href="/cart" className='text-black-300 hover:text-red-600 relative'>
                <AiOutlineShoppingCart size={24}/>
                <span className='absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-2 text-xs'>
                    0
                </span>
            </Link>


        </div>

    </nav>
);
};

export default Navbar;
