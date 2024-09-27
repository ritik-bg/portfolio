import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <div className="container flex justify-between px-16 py-5 text-gray-300 ">
            <header className="logo font-bold text-xl text-center ml-8 ">
                 
                <span className='text-cyan-500 text-3xl font-semibold'>R </span>
                 i t i k . 
                
            </header>
            <navbar className="right flex gap-8 text-xm font-semibold items-center">
                <Link className='hover:text-cyan-500' href="/">Home</Link>
                <Link className='hover:text-cyan-500' href="/about">About</Link>
                <Link className="hover:text-cyan-500" href="/skill">
            Skills
          </Link>
                <Link className='hover:text-cyan-500' href="https://github.com/ritik-bg">Projects</Link>
                <Link className='hover:text-cyan-500' href="https://www.linkedin.com/in/ritik-kumar-288918313?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">Contact Me</Link>
            </navbar>
        </div>
    )
}

export default Navbar
