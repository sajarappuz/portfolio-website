"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { textContainer, textVariant } from '@/utils/motion'
import { TypingText } from '../Typingtext/Typing'

const Hero = () => {
  return (
    <section className='w-screen  md:w-[90vw] h-[90vh] flex flex-col md:flex-row md:mx-[65px] '>
        <div className='flex-1 flex flex-col items-center justify-center  '>
         <TypingText title="Hi There 🖐,"
         textStyles="text-start"/>
         <motion.h1
         variants={textVariant(1)
         }
          initial="hidden"
          whileInView="show"
          className='font-bold text-3xl mt-[10px] leading-30'
         >
            I'm Sajar Mohammed 
    
         </motion.h1>
         <motion.h1
         variants={textVariant(1.5)
         }
          initial="hidden"
          whileInView="show"
          className='font-bold text-3xl mt-[10px] leading-30'
         >
    
            Front End Developer
         </motion.h1>
        </div>
        <div className='flex-1 bg-red-50'>
              web developer
        </div>
    </section>
  )
}

export default Hero