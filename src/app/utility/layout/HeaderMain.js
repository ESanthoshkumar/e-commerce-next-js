import React from 'react'
import { FaFacebook } from 'react-icons/fa';
import { IoLogoInstagram, IoLogoWhatsapp } from 'react-icons/io';
import Link from 'next/link';

const HeaderMain = () => {
    return (
        <div className=' container max-auto '>
            <div className='container py-4 border-b border-gray-100 hidden sm:block '>
                <div className='flex justify-between items-center '>

                    <div className=' gap-10 px-3 flex '>
                        <Link href='/www.facebook.com/'>
                            <div className=' text-rose-400 hover:scale-110 hover:border-b cursor-pointer duration-300'>
                                <FaFacebook size={24} />
                            </div>
                        </Link>
                        <Link href='/www.whatsapp.com'>
                            <div className='text-rose-400 hover:scale-110 hover:border-b cursor-pointer duration-300'>
                                <IoLogoWhatsapp size={24} />
                            </div>
                        </Link>
                        <Link href='/www.instagram.com'>
                            <div className='text-rose-400 hover:scale-110 hover:border-b cursor-pointer duration-300'>
                                <IoLogoInstagram size={24} />
                            </div>
                        </Link>

                    </div>

                    <div className='text-gray-500 font-semibold '>
                        FREE <span className='text-rose-400 font-extrabold text-xl '> SHIPPING</span>
                        <span className='font-normal'> OFFERS END SOON </span>
                    </div>
                    <div className='font-bold text-rose-400'>
                        <span className='text-gray-500 font-semibold'>SHOPPING-</span>WEBSITE
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderMain