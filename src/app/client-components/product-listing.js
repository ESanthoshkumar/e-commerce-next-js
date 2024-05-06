"use client"
import React, { useState, useContext } from 'react'
import { AppContext } from '../utility/context/context-api';
import Popup from "@/app/Popup/page";
// import { MdClose } from "react-icons/md"

export default function ProductList() {

    const [showPopup, setShowPopup] = useState(false);
    const { addCart } = useContext(AppContext);

    const handleAddToCart = (pro) => {
        addCart(pro.id, pro.name, pro.model, pro.des, pro.price, pro.image);
        setShowPopup(true); 
    };

    const things = [
        {
            id: 1,
            name: 'laptop',
            model: 'samsung *pavilion ',
            des: 'Laptops are designed to be portable computers. They are smaller and lighter than desktops.Easy to carry for long way. ',
            price: '$300',
            image: 'https://media.istockphoto.com/id/1223342141/photo/couple-doing-shopping-online-with-credit-card.jpg?s=1024x1024&w=is&k=20&c=ldRQufxWJa1_DWObte_AYkgPSqAI-sM0QmSp5dYnpGc='
        },
        {
            id: 2,
            name: 'i mac',
            model: 'Apple Mac-Book ',
            des: ' Your digital storefront erger on the internet.  It facilitates the transaction using a create between a buyer and seller.',
            price: '$546',
            image: 'https://cdn.pixabay.com/photo/2017/08/01/00/44/laptop-2562361_640.jpg'
        },
        {
            id: 3,
            name: 'Apple Monitor',
            model: 'Apple ',
            des: 'Mac notebook computers designed eas ahsome and marketed by Apple that use Apple s macOS operating system since 2006.',
            price: '$200',
            image: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            id: 4,
            name: 'laptop',
            model: 'Asus vivobook ',
            des: 'An ecommerce website is your digital was storefront the internet. It facilitates the transaction between a buyer and seller.',
            price: '$532',
            image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            id: 5,
            name: 'lens',
            model: '20mm canon lens',
            des: 'A camera lens is the part of a camera that directs light to the film or, in a digital camera, to a computer sense the light.',
            price: '$54',
            image: 'https://images.pexels.com/photos/225157/pexels-photo-225157.jpeg?auto=compress&cs=tinysrgb&w=600',
        },
        {
            id: 6,
            name: 'camera',
            model: 'sony 520d',
            des: 'A camera is an instrument used to capture and store images and videos, either digitally via an electronic image senso.',
            price: '$212',
            image: 'https://images.pexels.com/photos/414781/pexels-photo-414781.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            id: 7,
            name: 'phone',
            model: 'Apple Mac-Book ',
            des: ' Your digital storefront on the internet. It facilitates the transaction we were using a create between a buyer and seller.',
            price: '$546',
            image: 'https://images.samsung.com/is/image/samsung/assets/in/explore/brand/5-best-android-mobile-phones-2022-in-india/banner-mobile-720x761-080422.jpg?$720_N_JPG$'
        },
    ];

    return (
        <div className='container mx-auto'>
            <div className='overflow-y-auto fixed right-0 top-10 p-5 '>
                {showPopup && <Popup className='' />}
            </div>
            <div className='grid gap-5 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:rid-cols-4 sm:m-4 py-4'>
                {things.map((item, index) => (

                    <ProductCard key={index} pro={item} handleAddToCart={handleAddToCart} />

                ))}


            </div>
        </div>
    )
}

const ProductCard = ({ pro, handleAddToCart }) => {
    const { addCart } = useContext(AppContext)

    return (

        <div className='p-3 shadow-sm shadow-black hover:shadow-lg hover:shadow-rose-400 bg-gray-600 duration-300 rounded-md'>

                <div className='px-2 py-5 hover:overflow-hidden flex justify-center items-center '>
                    <img className=' w-[350px] h-[250px] rounded-lg hover:scale-110 transtion-transform duration-300' src={pro.image} alt={`${pro.id}`} />
                </div>

                <div className='text-2xl font-semibold text-rose-400 text-center border-b border-rose-400 '>{pro.name}</div>
                <div className='py-2 text-gray-200 font-bold'>{pro.model}</div>
                <div className='text-justify text-black'>{pro.des}</div>
                <div className='p-2 text-right text-white font-semibold'>{pro.price}</div>
 
                <div className='flex justify-evenly'>
                    <button onClick={() => handleAddToCart(pro)} className='bg-white font-semibold hover:bg-rose-400 hover:text-gray-700 border-gray-400 border-2 px-10 py-1 rounded-md hover:border-rose-200 duration-300 uppercase'>
                        add to cart
                    </button>
                </div>
        </div>

    )
}
