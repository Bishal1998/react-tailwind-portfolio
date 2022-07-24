import React from 'react'
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Social from './components/Social';

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Social />
    </div>
  )
}

export default App