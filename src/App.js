import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Detail from './components/Detail';
import img1 from './img1.png';
import img2 from './img2.png';
import img3 from './img3.png';
import img4 from './img4.png';
import './App.css';  


function App() {
    return (
      <div className="App">
        <nav className='navbar'>
          <h2>TravelMedia.in</h2>
          <div className='navlink'>
            <img src={img2} alt="TravelMedia-home" />
            <img src={img4} alt="TravelMedia-notification" />
            <img src={img1} alt="TravelMedia-list" />
            <img src={img3} alt="TravelMedia-profile" />
           
            {/* Add any text or elements you want here */}
          </div>
        </nav>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/item/:id" element={<Detail />} />
        </Routes>
      </div>
    );
  }
  
  export default App;