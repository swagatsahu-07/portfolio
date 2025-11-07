import React from 'react'
import AboutSection from './AboutSection'

const About = () => {
  return (
    <>
      <div className='absolute inset-0 flex flex-col justify-center items-center text-center z-10'>
      <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-linear-to-r from-white/40 via-white/60 to-white/40">Get To Know More <br />About Me</h1>
      <p className="text-gray-300 text-lg max-w-5xl mt-5 mb-5">
        turning ideas into real life products is my calling.
      </p>
    <AboutSection />
    </div>
   </>
  )
}

export default About