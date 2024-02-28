import React from 'react';
import { Usuario } from '../app/utils/interfaces';

interface CardUserProps {
    userData: Usuario;
}

const CardUser: React.FC<CardUserProps> = ({ userData }) => {
    return (
        <div className="w-full flex max-w-[360px] py-3 bg-[#2D3250] bg-opacity-50 border-[3px] border-[#2D3250] rounded-lg shadow">
            <div className="flex flex-col pl-4 justify-center text-center w-full gap-4">
                <div className='flex gap-2'>
                    <p className='font-bold'>Nombre:</p> <span className='text-emerald-500 font-medium italic'>{userData.firstname}{userData.lastname}</span>
                </div>
                <div className='flex gap-2'>
                    <p className='font-bold'>Email:</p> <span className='text-emerald-500 font-medium italic'>{userData.email}</span>
                </div>
                <div className='flex gap-2'>
                    <p className='font-bold'>IP:</p> <span className='text-emerald-500 font-medium italic'>{userData.ip}</span>
                </div>
                <div className='flex gap-2'>
                    <p className='font-bold'>Website:</p> <span className='text-emerald-500 font-medium italic'>{userData.website}</span>
                </div>
            </div>
        </div>
    );
};

export default CardUser;