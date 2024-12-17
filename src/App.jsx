import React, { useEffect } from "react";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Project';
import Contact from './components/Contact';
import Aos from "aos";
import "aos/dist/aos.css"
import Footer from "./components/Footer";
const App=()=>{ 
  useEffect(() => {
    Aos.init();
    
   }, [])
 



  return (
  <>
  <Navbar></Navbar>
  <div className="container">
  <Home></Home>
  <Skills></Skills>
  <Projects></Projects>
  <Contact></Contact>
  <Footer></Footer>
  </div>
  </>
  )
}
export default App;