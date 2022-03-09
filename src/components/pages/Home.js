import React from 'react'
import HeroSection from '../HeroSection'
import headerImg from './../../images/engagementphotos/Katie1804.jpg';
import './Home.css'


const Home = () => {
  return (
    <>
      <HeroSection image={headerImg} text="Katie & Joseph"/>
      <div className="meet">
        <h1>Meet Us</h1>
      </div>
    </>

  )
}

export default Home