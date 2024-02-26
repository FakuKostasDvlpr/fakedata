import Link from 'next/link';
import React from 'react';

const Header = () => {
    const LinkNav = ["Users", "Credit-Cards", "Companies"];

    return (
        <header className='flex items-center justify-center'>
            <nav className='p-10'>
                <ul className='flex p-3 rounded-[12px] gap-10 bg-orange-500'>
                    <li>
                        <Link href={`/`} className='active:bg-white active:text-black'>Home</Link>
                    </li>
                    {LinkNav.map((link) => (
                        <li key={link} className='cursor-pointer hover:bg-white hover:text-black font-bold px-8 rounded-xl'>
                            <Link href={link.toLowerCase()}>{link}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Header;
