import React from 'react'
import Navbar from '../../component/navbar/Navbar'
import Hero from '../../component/hero/Hero'
import Blog from '../../component/blog/Blog'
import Footer from '../../component/footer/Footer'

function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default Home
