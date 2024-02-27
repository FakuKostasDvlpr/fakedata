"use client"
import React, { useState } from 'react';
import fetchUserData from './page';
import CardCompanies from '../components/CardCompanies';
import Loading from '../components/Loading';

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
                {/* <button onClick={handleClick} className='outline-dashed hover:outline-dashed hover:text-yellow-400 px-4'>Generate a new <span className='text-yellow-400 font-bold'>COMPANIES</span></button> */}
                {/* {companiesData ? (
                    <>
                        <CardCompanies companiesData={companiesData} />
                    </>
                ) : (
                    <p>No hay companias, genera uno.</p>
                )} */}
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
                        < button onClick={handleClick}>No hay Companies <span className='text-yellow-400 bg-white px-2 rounded-xl font-bold'>AGREGA UNA</span></button>
                        )
                )}
            </div>
        </>
    );
};

export default Layout;
