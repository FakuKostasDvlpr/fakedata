"use client"
import React, { Suspense, useState } from 'react';
import fetchUserData from './page';
import CardUser from '../../components/CardUser';
import Loading from '../../components/Loading';
import { Alert } from '@mui/material';

export const Layout = () => {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleClick = async () => {
        setLoading(true); // Inicia la carga
        try {
            const response = await fetchUserData();
            if (response.ok) {
                const data = await response.json();
                if (data && data.data && data.data.length > 0) {
                    setUserData(data.data[0]);
                }
            } else {
                console.error('Error fetching user data:', response.statusText); // sweet alert
            }
        } catch (error) {
            console.error('Error fetching user data:', error); // sweet alert
        } finally {
            setLoading(false); // Finaliza la carga, independientemente del resultado
        }
    };

    return (
        <>
            <div className='flex justify-center flex-col items-center gap-10 py-10'>
                <h2 className='font-bold text-3xl'>
                    Users
                </h2>
                {loading ? ( // Muestra el indicador de carga si loading es true
                    <Loading />
                ) : (
                    userData ? (
                        <>
                            <CardUser userData={userData} />
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
