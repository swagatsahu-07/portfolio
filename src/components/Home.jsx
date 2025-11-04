import React from 'react'
import Typewriter from 'typewriter-effect';

const Home = () => {
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
              .typeString(`Hello I'm <br> Swagat Sahu`)
              .pauseFor(1500)
              .deleteAll()
              .typeString(`I'm a Web Designer.`)
              .pauseFor(1500)
              .deleteAll()
              .typeString(`I'm a Frontend Developer`)
              .pauseFor(1500)
              .deleteAll()
              .start();
          }}
        />
     

      </h1>
      
    </div>
  )
}

export default Home