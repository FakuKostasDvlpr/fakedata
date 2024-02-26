import React from 'react';
import { Usuario } from '../utils/interfaces';
import { useRouter } from 'next/router';

interface CardUserProps {
  userData: Usuario;
}

const CardUser: React.FC<CardUserProps> = ({ userData }) => {
  return (
    <div className="w-full flex max-w-[300px] py-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="flex flex-col pl-4 justify-center text-center w-full gap-4">
            <div className='flex gap-2'>
                <p className='font-bold'>Nombre:</p> <span className='text-green-300'>{userData.firstname}{userData.lastname}</span>
            </div>
            <div className='flex gap-2'>
                <p className='font-bold'>Email:</p> <span className='text-green-300'>{userData.email}</span>
            </div>
            <div className='flex gap-2'>
                <p className='font-bold'>Ip:</p> <span className='text-green-300'>{userData.ip}</span>
            </div>
            <div className='flex gap-2'>
                <p className='font-bold'>Website:</p> <span className='text-green-300'>{userData.website}</span>
            </div>
        </div>
    </div>
);
};

export default CardUser;