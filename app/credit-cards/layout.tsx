"use client"
import React, { useState } from 'react';
import fetchUserData from './page'; 
import CreditCard from '../components/CreditCard';

export const Layout = () => {
    const [creditCard, setCreditCard] = useState(null);

    const handleClick = async () => {
        try {
            const response = await fetchUserData();
            if (response.ok) {
                const data = await response.json();
                if (data && data.data && data.data.length > 0) {
                    setCreditCard(data.data[0]);
                }
            } else {
                console.error('Error fetching user data:', response.statusText); // sweet alert
            }
        } catch (error) {
            console.error('Error fetching user data:', error); // sweet alert
        }
    };

    return (
        <>
            <div className='flex justify-center flex-col items-center gap-10'>
                <h2 className='font-bold text-2xl'>
                    Users<span className='font-bold text-2xl text-yellow-300'> Last 2024</span>
                </h2>
                <button onClick={handleClick} className='outline-dashed hover:outline-dashed hover:text-yellow-400 px-4'>Generate a new <span className='text-yellow-400 font-bold'>CARD</span> </button>
                {creditCard ? (
                    <>
                        <CreditCard CardData={creditCard}/>
                    </>
                ) : (
                    <p>No hay usuario, genera uno.</p>
                )}
            </div>
        </>
    );
};

export default Layout;
