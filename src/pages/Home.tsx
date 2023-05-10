import React, { useState } from 'react';
import Logo from '../assets/Logo.png';
import Group from '../assets/Group.png';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import SearchIcon from '@mui/icons-material/Search';

function Home() {
   return (
      <div>
         <header className="header">
            <div className="container">
               <nav className="navbar">
                  <button id="menu-btn">
                     <DensityMediumIcon className="dot" />
                  </button>
                  <div className="left-side">
                     <a href="#" className="logo">
                        <img src={Logo} alt="brand" />
                     </a>
                     <div className="search-form">
                        <input className="search-form-txt" type="text" />
                        <button className="search-form-btn">
                           <SearchIcon id="search-icon" />
                        </button>
                     </div>
                  </div>

                  <div className="right-side">
                     <ul className="nav-list">
                        <li className="nav-item">
                           <a className="nav-link" href="#">
                              Faivorite
                           </a>
                        </li>
                        <li className="nav-item">
                           <a className="nav-link" href="#">
                              Home
                           </a>
                        </li>
                     </ul>
                     <a href="#" className="fac">
                        <img src={Group} alt="icon" />
                     </a>
                  </div>
               </nav>
            </div>
         </header>
         <section className="promo"></section>
         <section className="products"></section>
      </div>
   );
}

export default Home;
