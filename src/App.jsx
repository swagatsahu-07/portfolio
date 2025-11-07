import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import About from './components/About'
import Project from './components/Project'
import Changelog from './components/Changelog'
import Contact from './components/Contact'
import Home from './components/Home'


const App = () => {
  return (
    <BrowserRouter>
    <Nav/>
   
     <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/project' element={<Project />} />
        <Route path='/changelog' element={<Changelog />} />
        <Route path='/contact' element={<Contact />} />
    </Routes> 
    
    </BrowserRouter>
  )
}

export default App