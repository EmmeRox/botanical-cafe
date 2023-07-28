import { useState } from 'react';

function Navbar() {
    return (
        <>
        <nav className='m-auto max-w-5xl'> 
            <div className="navbar">
                <ul className='flex justify-between ml-6 p-3 text-2xl'>
                    <li className="links">Home</li>
                    <li className="links">About</li>
                    <li className="links">Contact</li>
                    <li className="links"></li>
                    </ul></div></nav></>
    )
}

export default Navbar;