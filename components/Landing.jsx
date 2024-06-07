import React from 'react'
import { Navbar } from "./Navbar";
import {Meal} from  "./Meal";
import Image from 'next/image';
export const App = () => {
  return (
    <>
    <div className="relative min-h-screen">
      <img src='/Untitled.png' alt='background ' className='absolute inset-0 w-full h-full object-cover' />
      <div className='relative z-10 pt-4'>
      <Navbar/>
      </div>
     

      <div className="relative z-9 flex-grow flex flex-col justify-center items-start p-10 lg:pl-20 text-left bg-opacity-0 bg-white">
          <div className="max-w-lg">
            <h1 className="text-xl font-bold mb-2">
              Discount up to 20%
              </h1>
              <h1 className="text-4xl font-bold mb-4">
              Buy Fresh And Organic Grocery Food
            </h1>
            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet consectetur. Condimentum sed sed blandit purus nec nibh tortor ipsum. Placerat consequat lorem.
            </p>
            <button className="px-6 py-3 bg-green-600 text-white rounded-md">SHOP NOW</button>
          </div>
          <div className="flex mt-8">
            <div className="mr-8">
              <h2 className="text-2xl font-bold">35k +</h2>
              <p>Users</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold">18k +</h2>
              <p>Products</p>
            </div>
          </div>
        </div>

        {/* Food Plate Image */}
        <div className="absolute bottom-[75px] right-[10px] sm:right-[50px] md:right-[10px] custom-lg:right-[20px] xl:right-[200px] p-5 lg:p-10 z-9 rounded-full lg:flex hidden">
  
          <Image className='rounded-full' src='/food.jpeg' alt='Food Plate' width={400} height={400} />
        </div>
     
     </div>
     <div  className="relative z-10"><Meal/></div>
    </>
   
  )
}
