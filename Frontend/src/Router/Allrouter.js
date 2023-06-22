import React from 'react'
import {  Routes, Route } from 'react-router-dom'
import Pricing from '../pages/Pricing'
import Buy from '../pages/Buy'
import MyAccount from '../pages/MyAccount'
import NotFound from '../pages/NotFound'
import Home from '../pages/Home'
const Allrouter = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing/>} />
        <Route path="/buy" element={<Buy/>} />
        <Route path="/account" element={<MyAccount/>} />
        <Route path="*" element={<NotFound />} />
    </Routes>
    </>
  )
}

export default Allrouter