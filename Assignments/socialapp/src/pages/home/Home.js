import React from 'react'
import Header from '../../components/header/Header'
import Sidebar from './../../components/sidebar/Sidebar';
import Hero from '../../components/hero/Hero';
import Rightbar from '../../components/rightbar/Rightbar';
import './home.css'

function Home() {
  return (
    <div className="app-container">
            <span className="header"><Header/></span>
            <div className="d-flex homepart">
                <Sidebar />
                <main className="p-4 flex-grow-1 main">
                    {/* Main content goes here */}
                    <Hero/>
                </main>
                <Rightbar/>
            </div>
        </div>
  )
}

export default Home

