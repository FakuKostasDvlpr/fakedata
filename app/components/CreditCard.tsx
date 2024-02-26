import React, { useState } from 'react';
import { CreditCards } from '../utils/interfaces';

interface CardUserProps {
  CardData: CreditCards;
}

const CreditCard: React.FC<CardUserProps> = ({ CardData }) => {
  return (
    <div className="w-full flex max-w-[350px] py-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="flex  flex-col pl-4 justify-center  w-full gap-4">
            <div className='flex gap-2'>
                <p className='font-bold'>Nombre:</p> <span className='text-green-300'>{CardData.type }{CardData.owner}</span>
            </div>
            <div className='flex gap-2'>
                <p className='font-bold'>Expiration:</p> <span className='text-green-300'>{CardData.expiration}</span>
            </div>
            <div className='flex gap-2'>
                <p className='font-bold'>Number CARD:</p> <span className='text-green-300'>{CardData.number}</span>
            </div>
        </div>
    </div>
);
};

export default CreditCard;