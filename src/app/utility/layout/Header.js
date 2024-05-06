"use client"
import Link from "next/link";
import { AppContext } from "../context/context-api";
import { useContext } from "react";
import { BsSearch } from 'react-icons/bs';
import { BiUser } from 'react-icons/bi';
import { FiHeart } from 'react-icons/fi';
import { HiOutlineShoppingBag } from 'react-icons/hi2';


export default function Header() {
    const { cart } = useContext(AppContext)

    return (
        <div className="container max-auto">
            <div className='border-b border-gray-100 py-3 '>
                <div className='flex justify-around items-center'>
                    <div className='font-bold text-md md:text-xl lg:text-2xl xl:text-4xl text-center pb-4 sm:pb-0 text-rose-400'>
                        <Link href='/'> LOOGO....</Link>
                    </div>
                    <div className="flex justify-around ">
                        <div className='w-[60%] relative'>
                            <div className='relative'>
                                <input className='border-gray-200 text-black border p-2 p1-10 w-full rounded-full text-center ' type='text' placeholder='search' />
                                <span className="absolute inset-y-0 right-0 flex items-center pr-3">
                                    <BsSearch className='text-rose-400' />
                                </span>
                            </div>
                        </div>

                        <div className=" flex  gap-4 sm:py-4 md:py-3 p-4 ">
                            <div className='gap-4 text-rose-400 text-[24px] md-text-[24px] lg-text-[30px] xl:text-[30px] '>
                                <Link href='/'><BiUser /></Link>
                            </div>
                            <div className='gap-4 text-rose-400 text-[24px] md-text-[24px] lg-text-[30px] xl:text-[30px] '>
                                <Link href='/whishlist'><FiHeart /></Link>
                            </div>

                            <div className='gap-4 text-rose-400 text-[24px] md-text-[24px] lg-text-[30px] xl:text-[30px] '>
                                <Link href='/cart' className="">
                                    <span className="absolute w-4 h-4 rounded-full bg-gray-500 text-center text-white text-xs">{cart.length}
                                    </span>
                                    <HiOutlineShoppingBag />
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
