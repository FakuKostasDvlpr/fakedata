import React from 'react';
import { Companies } from '../utils/interfaces';

interface CardCompaniesProps {
    companiesData: Companies;
}

const CardCompanies: React.FC<CardCompaniesProps> = ({ companiesData }) => {
    return (
        <div className="w-full flex max-w-[300px] py-3 bg-white border-2 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="flex flex-col pl-4 justify-center text-center w-full gap-4">
                <div className='flex gap-2'>
                    <p className='font-bold'>Nombre:</p> <span className='text-green-300 font-medium italic'>{companiesData.name}</span>
                </div>
                <div className='flex gap-2'>
                    <p className='font-bold'>Email:</p> <span className='text-green-300 font-medium italic'>{companiesData.email}</span>
                </div>
                <div className='flex gap-2'>
                    <p className='font-bold'>VAT:</p> <span className='text-green-300 font-medium italic'>{companiesData.vat}</span>
                </div>
                <div className='flex gap-2'>
                    <p className='font-bold'>Phone:</p> <span className='text-green-300 font-medium italic'>{companiesData.phone}</span>
                </div>
                <div className='flex gap-2'>
                    <p className='font-bold'>Country:</p> <span className='text-green-300 font-medium italic'>{companiesData.country}</span>
                </div>
                <div className='flex gap-2'>
                    <p className='font-bold'>Website:</p> <span className='text-green-300 font-medium italic'>{companiesData.website}</span>
                </div>
            </div>
        </div>
    );
};

export default CardCompanies;