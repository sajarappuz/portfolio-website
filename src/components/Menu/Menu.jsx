"use client"
import React from 'react'
import Link from 'next/link'

const Menu = () => {
  return (
    <div className='   h-[70vh] bg-slate-100 w-screen'>
         <ul className='flex flex-col gap-8 text-xl px-[200px] py-6' >
           <Link href="/about"> <li>About</li></Link>
           <Link href="/resume">  <li>Resume</li></Link> 
           <Link href="/contact"> <li>Contact</li></Link>
        </ul>
    </div>
  )
}

export default Menu