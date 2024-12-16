import React from 'react'
import  Navbar  from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Popular from './components/Popular/Popular'
import About from './components/About/About'
import Reviews from './components/Reviews/Reviews'
import Footer from './components/Footer/Footer'
const App = () => {
  return (
    <div>
      <Navbar/>
      <main>
        <div id='home'>
          <Home/>
        </div>
        <div id='popular'>
          <Popular/>
        </div>
        <div id='about'>
          <About/>
        </div>
        <div id='reviews'>
          <Reviews/>
        </div>
      </main>
      <Footer/>
    </div>
  );
};

export default App