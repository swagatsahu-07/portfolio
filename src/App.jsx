import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Nav from "./components/Nav";
import About from "./Pages/About";
import Project from "./Pages/Project";
import Changelog from "./Pages/Changelog";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Loader from "./components/Loader";
import Footer from "./components/Footer";

const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Loader onComplete={() => setLoading(false)} />}

      {!loading && (
        <BrowserRouter>
          <Nav />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/project" element={<Project />} />
            <Route path="/changelog" element={<Changelog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
           <Footer/>
        </BrowserRouter>
      )}
    </>
  );
};

export default App;
