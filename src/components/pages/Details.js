import React from 'react'
import HeroSection from '../HeroSection'
import Blurb from '../Blurb'
import headerImg from './../../images/engagementphotos/Katie1775.jpg';
import './Details.css'

import eli from './../../images/peeps/eli.jpg';
import GE from './../../images/peeps/GE.HEIC';
import Geva from './../../images/peeps/Geva.heic';
import JF from './../../images/peeps/JF.jpg';
import JW from './../../images/peeps/JW.jpg';
import mike from './../../images/peeps/mike.jpg';
import shea from './../../images/peeps/shea.jpg';
import tony from './../../images/peeps/tony.jpg';

const Details = () => {
  return (
    <>
    
      <HeroSection image={headerImg} text="Details" style={{ marginLeft: '50vw', marginTop: '-25vw'}} alt="Katie and Joseph on bridge"/>
      
      <div className="details">

        <div className="accomodations"> 

          <div className="banner details">
              <div className="title">
                <h1>Accommodations</h1>
              </div> 
          </div> {/*details-banner*/}

          <div className="hotels">
            <Blurb title="Hotel Name" link="http://hotel.com" address="Address Line. labore et dolore magna aliqua." text="We got a block rate discount at Hotel Name. ... You can find them halfway between Conshohocken and Quakertown. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
            <Blurb title="Hotel Name" address="Address Line. labore et dolore magna aliqua." text="We got a block rate discount at Hotel Name. ... You can find them halfway between Conshohocken and Quakertown. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
            <Blurb title="Parking Garage (Conshohocken)" address="Address Line. labore et dolore magna aliqua." text="There is a parking garage near the church we can use. ... You can find it in Conshohocken a street over from the church. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />

          </div> {/*hotels*/}

        </div> {/*accomodations*/}


        <div className="wedding-party"> 

          <div className="banner details">
              <div className="title">
                <h1>Wedding Party</h1>
              </div> 
          </div> {/*details-banner*/}

          <div className="people">

            <div className="girls">
              <div className="person-img">
                <img className="small-img" src={eli} alt='Elizabeth'/>
                <Blurb title="Elizabeth Morgan" subtitle="Maid of Honor"  text="Katie and Elizabeth lived together in their first years of college. Even after changing schools, Elizabeth never fails to keep in contact and send Katie funny videos." />
              </div>
              <div className="person-img">
                <img className="small-img" src={GE} alt='Genevieve'/>
                <Blurb title="Genevieve Emanuel" subtitle="Bridesmaid" text="Genevieve and Katie also lived together in college. They love to sit and chat for hours about anything and everything. " />
              </div>              
              <div className="person-img">
                <img className="small-img" src={Geva} alt='Geneva'/>
                <Blurb title="Geneva Dardick" subtitle="Bridesmaid" text="Katie and Geneva met at their side hobby, dance class! After lots of classes and dance concerts together, Katie decided she basically lives at the Dardick's house.  " />
              </div>
              <div className="person-img">
                <img className="small-img" src={shea} alt='Shea'/>
                <Blurb title="Shea Elliott" subtitle="Bridesmaid" text="Shea met Katie at the beginning of their college careers. Through thick and thin, they've kept a strong friendship.  " />
              </div>
            </div> {/*girls*/}

            <div className="guys">
              <div className="person-img">
                  <img className="small-img" src={tony} alt='Tony'/>
                  <Blurb title="Tony Redmond" subtitle="Best Man" text="Tony and Joseph grew up together, they know each other and play video games all the time. Of course he is the best man!" />
                </div>
                <div className="person-img">
                  <img className="small-img" src={JW} alt='Jacob W'/>
                  <Blurb title="Jacob Wade" subtitle="Groomsman" text="Yes, he introduced the couple. He gets a seat at the table. Jacob and Joseph met at X, and were friends ever since!" />
                </div>              
                <div className="person-img">
                  <img className="small-img" src={JF} alt='Jacob F'/>
                  <Blurb title="Jacob Fetter" subtitle="Groomsman" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
                </div>              
                <div className="person-img">
                  <img className="small-img" src={mike} alt='Mike'/>
                  <Blurb title="Mike Baran" subtitle="Groomsman" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
                </div>
            </div>{/*guys*/}

          </div> {/*people*/}
        </div> {/*wedding-party*/}

        <div className="menu">
          <div className="food">

          </div> {/*food*/}
        </div> {/*menu*/}


        <div className="other"> 

          <div className="banner details">
              <div className="title">
                <h1>Other Information</h1>
              </div> 
          </div> {/*details-banner*/}

          <div className="information">
            <Blurb title="What to wear" text="Out of the respect for our Lord, the Bride and Groom request that guests dress modestly in the style required at St. Peter's Basilica in Rome: namely, that the shoulders and knees are covered for both men and women, with no form fitting clothing or revealing necklines." />
            <Blurb title="Note about the ceremony **IMPORTANT**" text="Latin, communion (& how it works), timewise, etc.  ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. We left plenty of time in between the ceremony and reception for travel since we know it will be a little longer of a drive! Thanks :)" />
            <Blurb title="Note on transportation & parking" text="Try carpooling! While there is a parking garage near the church for the ceremony, the Trolley Barn has limited parking. The Trolley Barn also is attached to a little market, so the public will be occupying the parking lots during the day. " />
            <Blurb title="Sharing photos" text="Katie adores looking back at fond memories, so be sure to share photos from our wedding day! We are thinking of starting a hashtag if you want to tag on instagram! Check back here for the hashtag closer to the big day. " />
            <Blurb title="Registry note & more about Katie & Joseph" text="Katie & Joseph love to do many thing together in their free time. We love the outdoors, and will take walks in the neighborhood or hit the trails for a hike! We try and hit the good trails with waterfalls, scenic overlooks, or lots of rocks. On days we are feeling lazy, or it is just too cold out for a hike, we love to cook! From homade pierogies to gnocchi to fresh sorbet, we love to try something new. " />

          </div> {/*information*/}

        </div> {/*other*/}



      </div> {/*details*/}


    </>
  )
}

export default Details