"use client"
import React, { useState } from 'react';
import fetchUserData from './page';
import CardCompanies from '../components/CardCompanies';
import Loading from '../components/Loading';
import { Alert } from '@mui/material';

export const Layout = () => {
    const [companiesData, setCompaniesData] = useState(null);
    const [loading, setLoading] = useState(false)
    const handleClick = async () => {
        setLoading(true)
        try {
            const response = await fetchUserData();
            if (response.ok) {
                const data = await response.json();
                if (data && data.data && data.data.length > 0) {
                    setCompaniesData(data.data[0]);
                }
            } else {
                console.error('Error fetching user data:', response.statusText); // sweet alert
            }
        } catch (error) {
            console.error('Error fetching user data:', error); // sweet alert
        } finally{
            setLoading(false)
        }
    };

    return (
        <>
            <div className='flex justify-center flex-col items-center gap-10'>
                <h2 className='font-bold text-2xl'>
                    Companies<span className='font-bold text-2xl text-yellow-300'> Last 2024</span>
                </h2>
                <button onClick={handleClick} className='outline-dashed hover:outline-dashed hover:text-yellow-400 px-4'>Genereta New</button>
                {loading ? (
                    <>
                        <Loading />
                    </>
                ) : (
                    companiesData ? (
                        <>
                            <CardCompanies companiesData={companiesData} />
                        </>
                    ):(
                        <Alert severity="warning">Is empty, Generate new</Alert>
                        )
                )}
            </div>
        </>
    );
};

export default Layout;
