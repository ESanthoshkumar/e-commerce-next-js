"use client"
import React, { useState, createContext } from "react";
import { useEffect } from "react";


export const AppContext = createContext(null);

export const AuthProvider = ({ children }) => {




    const [cart, setCart] = useState([])

    const addCart = (id, name, model, des, price, image) => {
        const newItem = {
            id: id,
            name: name,
            model: model,
            des: des,
            price: price,
            image: image,
            quantity: 1,
        };

        let cartData;

        // Check if the item already exists in the cart
        const existingItem = cart.find(item => item.id === id);

        if (existingItem) {
            // If item exists, update the quantity
            cartData = cart.map(item =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            );
            setCart(cartData);
        } else {
            cartData = [...cart, newItem]
            // If item does not exist, add it to the cart
            setCart(cartData);
        }
    };

    const removeCart = (id) => {
        const updatedCart = cart.filter(item => item.id !== id);
        setCart(updatedCart);
    };

    const decreaseQuantity = (id) => {
        const updatedCart = cart.map(item =>
            item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        );

        // Filter out items with quantity > 0, update cart state
        const filteredCart = updatedCart.filter(item => item.quantity > 0);

        setCart(filteredCart);

    };

    const value = {
        cart,
        setCart,
        removeCart,
        addCart,
        decreaseQuantity
    }

    useEffect(() => {

    }, []);

    return (
        <AppContext.Provider value={value}>{children}</AppContext.Provider>
    );

};

export default AuthProvider