"use client"
import React, { useState } from 'react';
import fetchUserData from './page'; 
import CreditCard from '../components/CreditCard';
import Loading from '../components/Loading';

export const Layout = () => {
    const [creditCard, setCreditCard] = useState(null);
    const [loading, setLoading] = useState(false)

    const handleClick = async () => {
        setLoading(true)
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
        }finally{
            setLoading(false)
        }
    };

    return (
        <>
            <div className='flex justify-center flex-col items-center gap-10'>
                <h2 className='font-bold text-2xl'>
                    Users<span className='font-bold text-2xl text-yellow-300'> Last 2024</span>
                </h2>
                {/* <button onClick={handleClick} className='outline-dashed hover:outline-dashed hover:text-yellow-400 px-4'>Generate a new <span className='text-yellow-400 font-bold'>Credit Card</span> </button> */}
                {loading ? (
                        <Loading />
                ) : (
                    creditCard ? (
                        <>
                        <CreditCard CardData={creditCard} /> 
                        </>
                    ) : (
                       < button onClick={handleClick}>No hay Credit cards <span className='text-yellow-400 bg-white px-2 rounded-xl font-bold'>AGREGA UNA</span></button>
                    )
                )}
            </div>
        </>
    );
};

export default Layout;
