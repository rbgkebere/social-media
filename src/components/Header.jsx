import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <div className='shadow-sm border-b sticky top-0 bg-white z-30 p-3'>
      <div className='flex justify-between items-center max-w-6xl 
      mx-auto'>
            {/* Logo  */}
            <Link href='/' className='hidden sm:inline-flex'>
            <Image
            src='/ig-logo-black.webp'
            width={96}
            height={96}
            alt='instagram logo'
            />
            </Link>

            <Link href='/' className='sm:hidden'>
            <Image
            src='/ig-logo-2016.webp'
            width={40}
            height={40}
            alt='instagram logo'
            />
            </Link>

             {/* Search input  */}
             <input type="text" 
             placeholder='Search'
             className='bg-gray-50 border border-gray-200 
             rounded text-sm w-full max-w-[210px] py-2 px-4'
             />

             {/* Menu item  */}
             <button className='text-sm font-semibold text-blue-500'
             > Log In</button>
      </div>
    </div>
  )
}
