import React from 'react';
import { Companies } from '../app/utils/interfaces';

interface CardCompaniesProps {
    companiesData: Companies;
}

const CardCompanies: React.FC<CardCompaniesProps> = ({ companiesData }) => {
    return (
        <div className="w-full flex max-w-[360px] py-3 bg-[#2D3250] bg-opacity-50 border-[3px] border-[#2D3250] rounded-lg shadow">
            <div className="flex flex-col pl-4 justify-center text-center w-full gap-4">
                <div className='flex gap-2'>
                    <p className='font-bold'>Nombre:</p> <span className='text-emerald-500 font-medium italic'>{companiesData.name}</span>
                </div>
                <div className='flex gap-2'>
                    <p className='font-bold'>Email:</p> <span className='text-emerald-500 font-medium italic'>{companiesData.email}</span>
                </div>
                <div className='flex gap-2'>
                    <p className='font-bold'>VAT:</p> <span className='text-emerald-500 font-medium italic'>{companiesData.vat}</span>
                </div>
                <div className='flex gap-2'>
                    <p className='font-bold'>Phone:</p> <span className='text-emerald-500 font-medium italic'>{companiesData.phone}</span>
                </div>
                <div className='flex gap-2'>
                    <p className='font-bold'>Country:</p> <span className='text-emerald-500 font-medium italic'>{companiesData.country}</span>
                </div>
                <div className='flex gap-2'>
                    <p className='font-bold'>Website:</p> <span className='text-emerald-500 font-medium italic'>{companiesData.website}</span>
                </div>
            </div>
        </div>
    );
};

export default CardCompanies;