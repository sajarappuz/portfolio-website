"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import Menu from '../Menu/Menu'
import Image from 'next/image'
import {motion} from "framer-motion"
import { navVariants } from '@/utils/motion'

const Navbar = () => {
      
    const [open, setOpen] = useState(false);

    const handleClick = () =>{
        setOpen(!open);
    }

  return (
    <motion.nav 
    variants={navVariants}
    initial='hidden'
    whileInView="show"
    className='w-full h-[60px] flex items-center justify-between py-4'>
        {/* left side */}
       <div className='pl-[80px] font-bold text-2xl'>
        <Link href="/">  WIZ.IO</Link>
       </div>
       {/* right side */}
       <div className='mr-40 hidden md:block'>
        <ul className='flex gap-8 text-xl' >
           <Link href="/about"> <li>About</li></Link>
           <Link href="/resume">  <li>Resume</li></Link>
           <Link href="/contact"> <li>Contact</li></Link>
        </ul>
       </div>
       <div className='md:hidden mr-4 relative' >
        <button onClick={handleClick}>
        { !open ?<Image src = "/open.png" width={20} height={20}/>:<Image src = "/close.png" width={20} height={20}/>
        }</button>
        
        {open && <div className='absolute top-[60px] right-0 bg-black text-white h-[60vh]'>
        <ul className='flex flex-col gap-8 text-xl px-[200px] py-6' >
           <Link href="/about" onClick={handleClick}> <li>About</li></Link>
           <Link href="/resume" onClick={handleClick}>  <li>Resume</li></Link> 
           <Link href="/contact" onClick={handleClick}> <li>Contact</li></Link>
        </ul>
        </div>}
       </div>
    </motion.nav>
  )
}

export default Navbar