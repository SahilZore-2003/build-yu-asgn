import React from 'react'
import "./Home.scss"
import Navbar from '../../components/Navbar/Navbar'
import Header from '../../components/Header/Header'
import List from '../../components/List/List'
import Footer from '../../components/Footer/Footer'
const Home = () => {
  return (
    <div className='home'>
      <Header />
      <List />
    </div>
  )
}

export default Home
