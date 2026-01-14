import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Project from "./Pages/Project";
import Contact from "./Pages/Contact";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <Loader onComplete={() => setLoading(false)} />;
  }

  return (
    <BrowserRouter>
      {/* GLOBAL APP WRAPPER */}
      <div className="relative min-h-screen bg-[#080808] flex flex-col overflow-x-hidden">
         <ScrollToTop /> 
        {/* NAVBAR */}
        <Nav />

        {/* MAIN CONTENT */}
        <main className="flex-1 pt-20 sm:pt-24">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/project" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* FOOTER */}
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
