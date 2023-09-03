import React from 'react'
import About from './about/page'
import Resume from './resume/page'
import Contact from './contact/page'
import Hero from '@/components/Hero/Hero'
import Whatdo from '@/components/Whatdo/Whatdo'

const App = () => {
  return (
    <div>
      <Hero/>
      <hr />
      <Whatdo/>
      <About/>
      <Resume/>
      <Contact/>
    </div>
  )
}

export default App