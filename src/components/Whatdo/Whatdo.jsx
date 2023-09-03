import React from 'react'
import { TypingText } from '../Typingtext/Typing'
import DoCard from '../DoCard/DoCard'

const Whatdo = () => {
  return (
    <section className='w-screen bg-cyan-100 md:w-[90vw] h-[100vh] flex flex-col md:mx-[65px] '>
        <div className='flex mt-4 ml-10'>
       <TypingText title="What I do?"  textStyles="text-start" />
       </div>
       <div>
        <DoCard/>
       </div>
    </section>
  )
}

export default Whatdo