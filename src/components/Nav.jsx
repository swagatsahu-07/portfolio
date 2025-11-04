import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'  
import Aurora from './Aurora';
import About from './About';



const Nav = () => {
  return (
   <>
   <div className='relative w-full h-screen bg-[#000000] overflow-hidden'>
  <div className='absolute inset-0 z-0'>
      <Aurora
  colorStops={["#060010", "#b19eef", "#5227ff"]}
  blend={0.5}
  amplitude={1.0}
  speed={0.5}
/>
  </div>
  <div className='absolute top-0 left-0 w-full flex justify-center items-center gap-80 py-6 z-20'>
    <h1 className='text-gray-300 text-xl'><NavLink to='/home' className={
    `text-gray-300 hover:text-red-500`}>Swagat.</NavLink></h1>
      <div className='flex justify-center items-center gap-10'>
        <NavLink to='/about' className={
    `text-gray-300 hover:text-gray-100`}>About</NavLink>
    <NavLink to='/pricing' className={
    `text-gray-300 hover:text-gray-100`}>Pricing</NavLink>
    <NavLink to='/changelog' className={
    `text-gray-300 hover:text-gray-100`}>Changelog</NavLink>
    <NavLink to='/contact' className={
    `text-gray-300 hover:text-gray-100`}>Contact</NavLink>
      </div>
      <button className='px-6 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white border border-white/30 hover:bg-white/20 transition-all duration-300'>Hire Me</button>
    </div>

     <div className='absolute inset-0 flex flex-col justify-center items-center text-center z-10'>
        <Outlet/>
     </div>
</div>
  
      
   </>
  )
}

export default Nav