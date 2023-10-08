import React from 'react'
import Link from 'next/link'
export default function Navbar() {
  return (
    <nav className='bg-slate-400 mb-4 flex justify-between item-center px-20 p-5 font-bold text-black'>
     <Link href='/'>
     Home
     </Link>   
     <ul>
        <li>
            <Link href='/about'>
            About
            </Link>
        </li>
     </ul>
    </nav>
  )
}
