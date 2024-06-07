

'use client'
import Image from 'next/image'
import React, { useState } from 'react'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <div className="flex justify-between items-center p-4 bg-white bg-opacity-0 backdrop-filter ">
        <div>GO <em className="font-bold">FOOD</em></div>
        <div className="hidden md:flex items-center gap-3 text-sm">
          <div className="flex items-center">
            <h2>Home</h2>
            <button>
              <Image
                src="/arrow.png"
                width={15}
                height={15}
                alt="arrow"
              />
            </button>
          </div>
          <div className="flex items-center">
            <h2>Groceries</h2>
            <button>
              <Image
                src="/arrow.png"
                width={15}
                height={15}
                alt="arrow"
              />
            </button>
          </div>
          <div className="flex items-center">
            <h2>Pages</h2>
            <button>
              <Image
                src="/arrow.png"
                width={15}
                height={15}
                alt="arrow"
              />
            </button>
          </div>
        </div>
        <div className="hidden md:block text-sm">Connect with us -&gt;</div>
        <div className="hidden md:flex items-center gap-3">
          <button className="bg-white bg-opacity-30 w-[30px] h-[30px] rounded-full flex items-center justify-center">
            <Image
              src="/search.png"
              width={20}
              height={20}
              alt="search"
            />
          </button>
          <button className="bg-white bg-opacity-30 w-[30px] h-[30px] rounded-full flex items-center justify-center">
            <Image
              src="/heart.png"
              width={20}
              height={20}
              alt="heart"
            />
          </button>
          <button className="bg-white bg-opacity-30 w-[30px] h-[30px] rounded-full flex items-center justify-center">
            <Image
              src="/user.png"
              width={20}
              height={20}
              alt="user"
            />
          </button>
          <button className="bg-white bg-opacity-30 w-[30px] h-[30px] rounded-full flex items-center justify-center">
            <Image
              src="/cart.png"
              width={20}
              height={20}
              alt="cart"
            />
          </button>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleDropdown} className="text-gray-800">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white bg-opacity-0 backdrop-filter backdrop-blur-lg shadow-md md:hidden">
          <div className="flex flex-col items-start p-4 gap-3 text-sm">
            <div className="flex items-center">
              <h2>Home</h2>
              <button>
                <Image
                  src="/arrow.png"
                  width={15}
                  height={15}
                  alt="arrow"
                />
              </button>
            </div>
            <div className="flex items-center">
              <h2>Groceries</h2>
              <button>
                <Image
                  src="/arrow.png"
                  width={15}
                  height={15}
                  alt="arrow"
                />
              </button>
            </div>
            <div className="flex items-center">
              <h2>Pages</h2>
              <button>
                <Image
                  src="/arrow.png"
                  width={15}
                  height={15}
                  alt="arrow"
                />
              </button>
            </div>
            <div className="text-sm mt-2">Connect with us -&gt;</div>
            <div className="flex items-center gap-3 mt-2">
              <button className="bg-black bg-opacity-30 w-[30px] h-[30px] rounded-full flex items-center justify-center">
                <Image
                  src="/search.png"
                  width={20}
                  height={20}
                  alt="search"
                />
              </button>
              <button className="bg-black bg-opacity-30 w-[30px] h-[30px] rounded-full flex items-center justify-center">
                <Image
                  src="/heart.png"
                  width={20}
                  height={20}
                  alt="heart"
                />
              </button>
              <button className="bg-black bg-opacity-30 w-[30px] h-[30px] rounded-full flex items-center justify-center">
                <Image
                  src="/user.png"
                  width={20}
                  height={20}
                  alt="user"
                />
              </button>
              <button className="bg-black bg-opacity-30 w-[30px] h-[30px] rounded-full flex items-center justify-center">
                <Image
                  src="/cart.png"
                  width={20}
                  height={20}
                  alt="cart"
                />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// import Image from 'next/image'
// import React from 'react'

// export const Navbar = () => {
//   return (
//     <div className=' flex justify-evenly items-center'>
//      <div>GO <em className='font-bold'>FOOD</em></div>
//      <div >
//         <ul className='flex items-center gap-3 text-sm'>
//             <li className='flex'>
//             <h2>Home</h2>
//             <button>
//                     <Image
//                 src="/arrow.png"
//                   width={15}
//                   height={15}
//                   alt='arrow'
//                 /></button>
//             </li>
//             <li className='flex'>
//             <h2>Groceries</h2>
//             <button>
//                     <Image
//                 src="/arrow.png"
//                   width={15}
//                   height={15}
//                   alt='arrow'
//                 /></button>
//             </li>
//             <li className='flex'>
//             <h2>pages</h2>
//             <button >
//                     <Image
//                 src="/arrow.png"
//                   width={15}
//                   height={15}
//                   alt='arrow'
//                 /></button>
//             </li>
//         </ul>
      
//      </div>
//      <h1 className=' text-sm'>connect with us-&gt;</h1>

//      <div> 
//         <ul className='flex items-center gap-3'>
//             <li>
//                 <button className='bg-white bg-opacity-30 w-[30px]  h-[30px] rounded-full flex items-center justify-center'>
//                     <Image
//                 src="/search.png"
//                   width={20}
//                   height={20}
//                   alt='search'
//                 /></button>
//             </li>
//             <li>
//                 <button className='bg-white bg-opacity-30 w-[30px]  h-[30px] rounded-full flex items-center justify-center'>
//                     <Image
//                 src="/heart.png"
//                   width={20}
//                   height={20}
//                   alt='search'
//                 /></button>
//             </li>
//             <li>
//                 <button className='bg-white bg-opacity-30 w-[30px]  h-[30px] rounded-full flex items-center justify-center'>
//                     <Image
//                 src="/user.png"
//                   width={20}
//                   height={20}
//                   alt='search'
//                 /></button>
//             </li>
//             <li>
//                 <button className='bg-white bg-opacity-30 w-[30px]  h-[30px] rounded-full flex items-center justify-center'>
//                     <Image
//                 src="/cart.png"
//                   width={20}
//                   height={20}
//                   alt='search'
//                 /></button>
//             </li>
//         </ul>
//      </div>
//     </div>
   
//   )
// }
