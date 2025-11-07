import React from 'react'

const ScrollingText = () => {
  return (
     <div className="w-full overflow-hidden bg-linear-to-r from-blue-900 to-blue-500 py-10">
      <div className="relative flex w-max animate-marquee">
        <span className="text-5xl font-bold text-white uppercase tracking-wider mx-12">
          Web Designer • Frontend Developer • Creative Coder • UI/UX Enthusiast • Problem Solver •
        </span>
        <span className="text-5xl font-bold text-white uppercase tracking-wider mx-12">
          Web Designer • Frontend Developer • Creative Coder • UI/UX Enthusiast • Problem Solver •
        </span>
      </div>
    </div>
  )
}

export default ScrollingText