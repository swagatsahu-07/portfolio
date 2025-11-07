import React from 'react'
import Typewriter from 'typewriter-effect';

const Project = () => {
  return (
    <div className='absolute inset-0 flex flex-col justify-center items-center text-center z-10'>
      <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-linear-to-r from-white/40 via-white/60 to-white/40">
             <Typewriter
          options={{
            loop: true, // 🔁 enables infinite loop
            delay: 75,  // typing speed
            deleteSpeed: 50, // deleting speed
            autoStart: true,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString('Coming Soon!')
              .pauseFor(1500)
              .start();
          }}
        />
     

      </h1>
      <p className="text-gray-300 text-lg max-w-xl mt-5">
        We build intuitive AI tools that help people work smarter, move faster, and stay focused on what matters.
      </p>
    </div>
  )
}

export default Project