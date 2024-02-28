import React, { useState } from 'react';
import { CreditCards } from '../app/utils/interfaces';

interface CardUserProps {
    CardData: CreditCards;
}

const CreditCard: React.FC<CardUserProps> = ({ CardData }) => {
    return (
        <div className="w-full flex max-w-[360px] py-3 bg-[#2D3250] bg-opacity-50 border-[3px] border-[#2D3250] rounded-lg shadow">
            <div className="flex flex-col pl-4 justify-center w-full gap-4">
                <div className='flex gap-2'>
                    <p className='font-bold'>Name:</p> <span className='text-emerald-500 font-medium italic'>{CardData.type}{CardData.owner}</span>
                </div>
                <div className='flex gap-2'>
                    <p className='font-bold'>Expiration:</p> <span className='text-emerald-500 font-medium italic'>{CardData.expiration}</span>
                </div>
                <div className='flex gap-2'>
                    <p className='font-bold'>Card Number:</p> <span className='text-emerald-500 font-medium italic'>{CardData.number}</span>
                </div>
            </div>
        </div>
    );
};

export default CreditCard;