import Link from 'next/link';
import React from 'react';

const Header = () => {
    const LinkNav = ["Users", "Credit-Cards", "Companies"];

    return (
        <header className='flex items-center justify-center'>
            <nav className='p-10 max-[768px]:w-full max-[768px]:p-0'>
                <ul className='flex p-3 rounded-[12px] gap-10 bg-[#2D3250] bg-opacity-50 max-[768px]:flex-col max-[768px]:rounded-none max-[768px]:text-center max-[768px]:gap-4 max-[768px]:items-center'>
                    <li className='cursor-pointer hover:bg-[#E5E1DA] hover:text-[#191919] font-bold px-5 rounded-full max-[768px]:w-fit'>
                        <Link href={`/`}>Home</Link>
                    </li>
                    {LinkNav.map((link) => (
                        <li key={link} className='cursor-pointer hover:bg-[#E5E1DA] hover:text-[#191919] font-bold px-5 rounded-full max-[768px]:w-fit'>
                            <Link href={link.toLowerCase()}>{link}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Header;