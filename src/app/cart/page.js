"use client"
import React, { useContext } from 'react';
import { AppContext } from '../utility/context/context-api';
import Link from 'next/link';

export default function page() {
    const { cart } = useContext(AppContext)

    return (
        <div className='bg-gradient-to-b from-black to-gray-200 h-[screen] py-8 '>
            <div className='felx flex-col-1'>
                {cart?.map((item, index) => (
                    <ProductCard key={index} pro={item} />
                ))}
            </div>
            <div className='flex justify-start text-black font-bold text-center p-2 '>
                <Link className=' bg-white font-semibold hover:bg-rose-400 hover:text-gray-700 border-black border-2  px-8 py-1 rounded-md hover:border-rose-200 duration-300' href='/'>Back To Home</Link>
            </div>
        </div>
    )
}

const ProductCard = ({ pro }) => {

    return (
        <div className='flex justify-center items-center '>
            <div>
                <img className=' h-[300px] w-[450px] rounded-md ' src={pro.image} alt={`${pro.id}`} />
                <div className='flex justify-between items-center text-blue-800'>
                    <p className='text-xl text-right font-semibold'>{pro.name}</p>
                    <p className='  '>{pro.price}</p>
                </div>

                <div className='flex justify-center items-center py-4'>
                    <Link href='/payment'>
                        <button className=' border-black bg-gray-600 text-white border-2 rounded-md px-10'>
                            Place Order
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}