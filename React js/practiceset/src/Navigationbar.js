import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Header'
import NavBar from './NavBar'
import Rule from './components/Rule'
function Navigationbar() {
  return (
    <div>
      <BrowserRouter>

        <Header />


        <Routes>
          <Route path='#contact' element={<NavBar />} />
        </Routes>
          <Rule id='contact' />
      </BrowserRouter>
    </div>
  )
}

export default Navigationbar
