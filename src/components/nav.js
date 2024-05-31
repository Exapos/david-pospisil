'use client'
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

export default function Nav() {
  
  const [isClick,setisClick] = useState(false);
  const toggleNavbar = () => {
    setisClick(!isClick)
  }
  
  return (
    <div>
      <nav className=''>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-16'>
            <div className='flex items-center'>
              <div className='flex-shrink-0'>
              <Link href="/">
                <h2 className="text-2xl text-transparent bg-clip-text bg-gradient-to-t from-[#fffd7d]  to-[#c01818] font-bold ">David Pospíšil</h2>
              </Link>
              </div>
            </div>
              <div className='hidden md:block'>
                <div className='ml-4 flex items-center space-x-4'>
                  <Link href="#about" className='text-[#c01818] hover:text-[#fffd7d] rounded-lg p-2 font-bold'>
                    O mně
                  </Link>
                  <Link href="#about" className='text-[#c01818] hover:text-[#fffd7d] rounded-lg p-2 font-bold'>
                    Deník
                  </Link>
                  <Link href="#about" className='text-[#c01818] hover:text-[#fffd7d] rounded-lg p-2 font-bold'>
                    Galerie
                  </Link>
                  <Link href="#about" className='text-[#c01818] hover:text-[#fffd7d] rounded-lg p-2 font-bold'>
                    Ceník
                  </Link>
                  <Link href="#about" className='text-[#c01818] hover:text-[#fffd7d] rounded-lg p-2 font-bold'>
                    Kontakt
                  </Link>
                </div>
              </div>
            <div className='md:hidden flex items-center'>
              <button className='inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white' onClick={toggleNavbar}>
                {isClick ? (
                  <Image src="/close.svg" width={30} height={30} alt="logo" />
                ) : (
                  <Image src="/hamburger-menu.svg" width={30} height={30} alt="logo" />
                )}
              </button>
            </div>
          </div>
        </div>
        {isClick && (
          <div className='md:hidden'>
            <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
              <Link href="#about" className='text-[#c01818] hover:text-[#fffd7d] rounded-lg p-2 font-bold block'>
                O mně
              </Link>
              <Link href="#about" className='text-[#c01818] hover:text-[#fffd7d] rounded-lg p-2 font-bold block'>
                Deník
              </Link>
              <Link href="#about" className='text-[#c01818] hover:text-[#fffd7d] rounded-lg p-2 font-bold block'>
                Galerie
              </Link>
              <Link href="#about" className='text-[#c01818] hover:text-[#fffd7d] rounded-lg p-2 font-bold block'>
                Ceník
              </Link>
              <Link href="#about" className='text-[#c01818] hover:text-[#fffd7d] rounded-lg p-2 font-bold block'>
                Kontakt
              </Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}