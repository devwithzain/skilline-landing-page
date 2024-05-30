import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { logo } from '@/public'
import { navbarItem } from '@/constant'

export default function Navbar() {
    return (
        <nav className='w-full flex justify-between items-center h-[8vh]'>
            <div>
                <Image
                    src={logo}
                    alt='logo'
                />
            </div>
            <div className="flex gap-16 items-center">
                {navbarItem.map((item) => (
                    <ul className='flex gap-4' key={item.id}>
                        <Link
                            className='text-[18px] text-[#252641] font-medium'
                            href={item.href}>
                            {item.title}
                        </Link>
                    </ul>
                ))}
                <div className="flex gap-4">
                    <button className='text-[18px] font-medium text-[#252641] bg-white rounded-full px-[30px] py-[6px]'>Login</button>
                    <button className='text-[18px] font-medium  bg-[#F48C06] text-white rounded-full px-[20px] py-[6px]'>Sign up</button>
                </div>
            </div>
        </nav>
    )
}
