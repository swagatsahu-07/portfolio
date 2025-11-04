import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import About from './components/About'
import Pricing from './components/Pricing'
import Changelog from './components/Changelog'
import Contact from './components/Contact'
import Home from './components/Home'

const App = () => {
  return (
    <BrowserRouter>
    <Nav/>
   
     <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/changelog' element={<Changelog />} />
        <Route path='/contact' element={<Contact />} />
    </Routes> 
   
    </BrowserRouter>
  )
}

export default App