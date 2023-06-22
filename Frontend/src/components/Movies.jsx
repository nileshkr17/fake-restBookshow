import React from 'react'
import { Card } from './Card'
import '../index.css';
export const Movies = () => {
  return (
    <div><h2 className='text-lg text-white font-bold text-center p-6 bg-black'>Recommended Movies</h2>
    <div className='flex bg-blue p-6'>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
    </div>
    </div>
  )
}
