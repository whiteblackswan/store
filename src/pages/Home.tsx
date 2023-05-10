import React, { useState } from 'react';
import Header from '../components/Header';

function Home() {
   return (
      <div>
         <Header />
         <section className="promo"></section>
         <section className="products"></section>
      </div>
   );
}

export default Home;
