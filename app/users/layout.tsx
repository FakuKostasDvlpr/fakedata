"use client"
import React, { useEffect, useState } from 'react';
import CardUser from '../components/CardUser';
import { Usuario } from '../utils/interfaces';
import { log } from 'console';

const Layout = () => {
  const [userData, setUserData] = useState<Usuario | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const URL = `https://fakerapi.it/api/v1/users?_quantity=1&_gender=male`;
        const response = await fetch(URL);
        const data = await response.json();
        if (data && data.data && data.data.length > 0) {
          setUserData(data.data[0]); // Asigna los datos del usuario
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    fetchUserData(); // Llama a la función de obtención de datos al montar el componente
  }, []); // El array vacío [] asegura que useEffect se ejecute solo una vez, equivalente a componentDidMount

  return (
    <>
      <div className='flex justify-center flex-col items-center gap-10'>
        <h2 className='font-bold text-2xl'>
          Users<span className='font-bold text-2xl text-yellow-300'> Last 2024</span>
        </h2>
        {/* Renderiza el componente CardUser solo si userData tiene datos */}
        {userData && <CardUser userData={userData} />}
      </div>
    </>
  );
};

export default Layout;