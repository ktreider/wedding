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
          <h6>Photos taken by the lovely: <a href="https://www.yajairaperez.com/" className="u" rel="noreferrer" target="_blank">Yajaira Perez Photography</a></h6>
          </div> {/*mid-img*/}

          <div className="right-side">
            <h3>Katie</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>{/*right-side*/}

        </div> {/*meet*/}

      </div> {/*top*/}
      
      <div className="rsvp">
          <div id="button">
            <Button buttonStyle='btn--outline' buttonSize='btn--large'>RSVP through The Knot here</Button>
          </div>
      </div> {/*rsvp*/}

      <div className="banner">
          <div className="title">
            <h1>Ceremony & Reception</h1>
            <h2> October 1st, 2022</h2>
          </div> 
      </div> {/*banner*/}

      <div className="schedule">
        <div className="sched-info">
          <h3>Schedule</h3>
          <br></br>

          <h4>Friday, September 30th, 2022</h4>
          <p>Rehearsal & Dinner (wedding party)............................ 4:00 pm</p>
          <br></br>

          <h4>Saturday, October 1st, 2022</h4>
          <p>Ceremony ............................................................................. 1:00 pm</p>
          <p>Cocktail Hour ....................................................................... 5:00 pm</p>
          <p>Dinner ..................................................................................... 6:30 pm</p>
        </div> {/*sched-info*/}
      </div> {/*schedule*/}


      <div className="locations">
          <div className="flex-styling">

            <div className="loc ">
              <div>
                <h3>St Mary Catholic Church</h3>
                <p>The ceremony will be held at the beautiful St. Mary's Church in Conshohocken, PA. It was founded in 1905 as a Polish Parish and is now under the pastoral care of the Priestly Fraternity of St Peter. <br /> The church is 25 minutes from the Philly Airport. </p>
                <a href="https://goo.gl/maps/vevFoeRrKYgLf6iT7" className="u" rel="noreferrer" target="_blank">140 W Hector Street, Conshohocken, PA</a>
              </div>
              
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3053.066046161117!2d-75.30993858929499!3d40.073938849874054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6be43733fa251%3A0x437e07142ff275a!2s140%20W%20Hector%20St%2C%20Conshohocken%2C%20PA%2019428!5e0!3m2!1sen!2sus!4v1652896538695!5m2!1sen!2sus" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="st marys"></iframe>
            </div> {/*loc*/}

            <div className="loc right">
              <div>
                <h3>The Trolley Barn</h3>
                <p>The Trolley Barn was built in 1896 as the terminal of the Quakertown-Richlandtown Traction Co., the building housed the region’s first electric trolleys, which ran from Main and Broad Streets to nearby Richlandtown. The Trolley Barn was renovated in late 2020 and now serves as a little public market and event space.</p>
                <a href="https://goo.gl/maps/6BmbQtisx7jhzVRd7" className="u" rel="noreferrer" target="_blank">116 E Broad Street, Quakertown, PA</a>
              </div>
                
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.54695903798!2d-75.3383234695933!3d40.44102959608636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c418a26cd4749f%3A0x5a21bd6df6a53212!2s116%20E%20Broad%20St%2C%20Quakertown%2C%20PA%2018951!5e0!3m2!1sen!2sus!4v1652897372426!5m2!1sen!2sus" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="trolley barn"></iframe>            
              </div> {/*loc*/}

          </div> {/*flex-styling*/}
      </div> {/*locations*/}


      <div id="waves">
        <svg class="waves hom" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto" >
        <defs>
        <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
        </defs>
        <g class="parallax">
        <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
        <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
        <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
        <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
        </g>
        </svg>
      </div>

    </>

  )
}

export default Home