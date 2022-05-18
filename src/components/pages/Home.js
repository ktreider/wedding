import React from 'react'
import HeroSection from '../HeroSection'
import headerImg from './../../images/engagementphotos/Katie1804.jpg';
import midImg from './../../images/engagementphotos/Katie2018.jpg';
import './Home.css'
import { Button } from '../Button';


const Home = () => {
  return (
    <>
      <HeroSection image={headerImg} text="Katie & Joseph" alt="Katie and Joseph"/>

      <div className="top">
        <h1>Meet Us</h1>
        <div className="meet">
          
          <div className="left-side">
            <h3>Joseph</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div> {/*left-side*/}

          <div className="mid-img">
          <img src={midImg} alt='Katie and Joseph'/>
          <h6>Photos taken by the lovely: <a href="https://www.yajairaperez.com/" rel="noreferrer" target="_blank">Yajaira Perez Photography</a></h6>
          </div> {/*mid-img*/}

          <div className="right-side">
            <h3>Katie</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>{/*right-side*/}

        </div> {/*meet*/}

      </div> {/*top*/}
      
      <div className="rsvp">
          <div id="button">
            <Button buttonStyle='btn--outline'>RSVP through The Knot here</Button>
          </div>

          
      </div> {/*rsvp*/}

    </>

  )
}

export default Home