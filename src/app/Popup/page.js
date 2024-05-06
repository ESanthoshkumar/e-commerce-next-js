"use client"
import React, { useState, useContext } from 'react';
import { AppContext } from '../utility/context/context-api';
import Link from 'next/link';
import { MdClose } from 'react-icons/md';

export default function Page() {
    const { cart } = useContext(AppContext);
    const [isOpen, setIsOpen] = useState(true);

    const handleClose = () => {
        setIsOpen(false);
    }

    return (
        <div className={`bg-rose-400 shadow-xl h-[600px] w-[250px] p-5 overflow-y-scroll rounded-md ${isOpen ? '' : 'hidden'}`}>
            <div className=' flex justify-end cursor-pointer '>
                <MdClose className='hover:rotate-90 duration-300' size={25} onClick={handleClose} />
            </div>
            <div className='flex '>
            </div>
            {cart?.map((item, index) => (
                <ProductCard key={index} pop={item} />
            ))}
        </div>
    )
}

const ProductCard = ({ pop }) => {

    return (
        <div className='flex justify-center items-center py-2'>
            <div className='py-4'>
                <img className='h-[150px] w-[350px] rounded-md' src={pop.image} alt={`${pop.id}`} />
                <div className='flex justify-between p-1 items-center'>
                    <p className='text-blue-800 font-semibold'>{pop.model}</p>
                    <p>{pop.price}</p>
                </div>
                <div className='flex justify-center hover:font-bold items-center border-2 border-gray-500 rounded-md capitalize hover:bg-gray-600 hover:scale-105 bg-gray-500 duration-300'>
                    <Link className='text-white font-semibold hover:text-rose-400' href='/cart'>go to cart</Link>
                </div>
            </div>
        </div>
    )
}
