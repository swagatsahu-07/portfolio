import React from 'react'
import Aurora from './Aurora';
import Typewriter from 'typewriter-effect';
import ScrollingText from '../components/ScrollingText'
import FirstSection from '../components/FirstSection';

const Home = () => {
  return (
    <>
    <div className=''></div>
    <div className='w-full absolute inset-0 z-0'>
      <Aurora
  colorStops={["#060010", "#b19eef", "#5227ff"]}
  blend={0.5}
  amplitude={1.0}
  speed={0.5}
/>
  </div>
    <div className="absolute inset-0 flex flex-col justify-center items-center text-center z-10">
      <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-linear-to-r from-white/40 via-white/60 to-white/40">
        Swagat Sahu{" "}
        <span className="text-white">
          <Typewriter
            options={{
              strings: [
                "a Web Designer",
                "a Frontend Developer",
                "a Creative Coder",
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 40,
              delay: 80,
            }}
          />
        </span>
      </h1>
      <p className="text-gray-300 text-lg max-w-xl mt-5">
        I create responsive, elegant web experiences that merge design and technology seamlessly.
      </p>
    </div>
    <ScrollingText/>
    <FirstSection/>
    </>
  )
}

export default Home