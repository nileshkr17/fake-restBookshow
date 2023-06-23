import React from 'react'
import Banner from '../components/Banner'
import Latest from '../components/Latest'
import Partner from '../components/Partner'
import Genre from '../components/Genre'

const Home = () => {
  return (
   <>
       <Banner />
      <Partner/>
      <Latest/>
      <Genre/>
   </>
  )
}

export default Home