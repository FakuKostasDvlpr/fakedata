"use client"
import React, { useState } from 'react';
import fetchUserData from './page'; 
import CreditCard from '../../components/CreditCard';
import Loading from '../../components/Loading';
import { Alert } from '@mui/material';

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
            <div className='flex justify-center flex-col items-center gap-10 py-10'>
                <h2 className='font-bold text-3xl'>
                    Credit Cards
                </h2>
                {loading ? (
                    <Loading />
                ) : (
                    creditCard ? (
                        <>
                            <CreditCard CardData={creditCard} /> 
                        </>
                    ) : (
                        <Alert severity="warning">Is empty, generate new...</Alert>
                    )
                )}
                <button onClick={handleClick} className='bg-[#2D3250] bg-opacity-50 font-medium px-4 py-2 rounded-md hover:scale-105 active:rounded-lg active:scale-95 transition-all delay-75 ease-in-out'>Generate</button>
            </div>
        </>
    );
};

export default Layout;
