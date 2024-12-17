import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Project';
import Contact from './components/Contact';
const App=()=>{ 
  return (
  <>
  <Navbar></Navbar>
  <div className="container">
  <Home></Home>
  <Skills></Skills>
  <Projects></Projects>
  <Contact></Contact>
  </div>
  </>
  )
}
export default App;