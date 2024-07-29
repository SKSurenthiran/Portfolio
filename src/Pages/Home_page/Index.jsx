import React from 'react'
import Index from '../../Components/Header'
import Intro from '../Home_page/Intro'
import About from './About'
import Experience from './Experience'
import Contect from './Contect'
import Footer from './Footer'
import Sosialmidia from './Sosialmidia'

function Home() {
  return (
    <div>
      <Index/>
      <div className='bg-primary px-40 sm:px-5'>
       <Intro/>
       <About/>
       <Experience/>
       <Contect/>
       <Footer/>
       <Sosialmidia/>
      </div>
     
    </div>
  )
}

export default Home