import React from 'react';

const Header = () => {
    const Link = ["Users", "Credit-Cards", "Companies"];

    return (
        <header className='flex items-center justify-center'>
            <nav className='p-10'>
                <ul className='flex p-3 rounded-[12px] gap-10 bg-orange-500'>
                    <li>
                        <a href={`/`} className='active:bg-white active:text-black'>Home</a>
                    </li>
                    {Link.map((link) => (
                        <li key={link} className='cursor-pointer hover:bg-white hover:text-black font-bold px-8 rounded-xl'>
                            <a href={link.toLowerCase()}>{link}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Header;
