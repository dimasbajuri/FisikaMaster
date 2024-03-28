import React from 'react'
import Header from '../components/Hero/Header'
import Navbar from '../components/Navbar/Navbar'
import Intro from '../components/Intro/Intro';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import Start from '../components/Start/Start';
import MainFooter from '../components/MainFooter/MainFooter';

library.add(fas, far, fab);

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LandingPage = () => {
  return (
    <div className='bg-slate-100'>
      <header>
        <Navbar />
        <Header  />
      </header>
      <main className='container mx-auto px-15 flex flex-col justify-center items-center py-10'>
        <Intro />
        <Start />
      </main>
      <footer>
        <MainFooter />
      </footer>
    </div>
  )
}

export default LandingPage