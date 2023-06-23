import React from 'react'
import {  Routes, Route } from 'react-router-dom'
// import Pricing from '../pages/Pricing'
import Buy from '../pages/Buy'
import MyAccount from '../pages/MyAccount'
import NotFound from '../pages/NotFound'
import Home from '../pages/Home'
import Ticket from '../pages/Ticket'
import { Movies } from '../components/Movies'
import Search from '../pages/Search'

const Allrouter = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search/>} />
        <Route path="/buy" element={<Buy/>} />
        <Route path="/account" element={<MyAccount/>} />
        <Route path='/ticket' element={<Ticket/>} />
        <Route path='/movies/:id' element={<Movies/>} />
        <Route path="*" element={<NotFound />} />
    </Routes>
    </>
  )
}

export default Allrouter