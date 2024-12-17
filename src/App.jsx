import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Skills from './components/Skills';
const App=()=>{ 
  return (
  <>
  <Navbar></Navbar>
  <div className="container">
  <Home></Home>
  <Skills></Skills>
  </div>
  </>
  )
}
export default App;