import React from 'react'
import Banner from '../components/Banner'
import Latest from '../components/Latest'
import Partner from '../components/Partner'
import { Movies } from '../components/Movies'
const Home = () => {
  return (
   <>
    <Banner />
      <Partner/>
      <Latest/>
   </>
  )
}

export default Home