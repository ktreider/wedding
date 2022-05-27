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

import maryParking from './../../images/maryParking3.png';

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

          <p id="misc">Find the following hotels halfway  between Conshohocken and Quakertown and under an hour from the Philadelphia International Airport (PHL).</p>
          <div className="hotels">
            <Blurb title="Quality Inn & Suites Quakertown-Allentown" link="https://www.choicehotels.com/pennsylvania/quakertown/quality-inn-hotels/pa164?mc=llgoxxpx" linkTitle="More Information Here" text="1905 John Fries Hwy, Quakertown, PA 18951" />
            <Blurb title="Hampton Inn Quakertown" link="https://www.hilton.com/en/hotels/quapahx-hampton-quakertown/?SEO_id=GMB-AMER-HX-QUAPAHX&y_source=1_MjA4Mjc4MC03MTUtbG9jYXRpb24ud2Vic2l0ZQ%3D%3D" linkTitle="More Information Here" text="1915 John Fries Hwy, Quakertown, PA 18951"/>
            <Blurb title="Springhill Suites by Marriott Quakertown" link="https://www.marriott.com/en-us/hotels/uktsh-springhill-suites-quakertown/overview/?scid=bb1a189a-fec3-4d19-a255-54ba596febe2&y_source=1_MjgxODYyNC03MTUtbG9jYXRpb24ud2Vic2l0ZQ%3D%3D" linkTitle="More Information Here" text="1930 John Fries Hwy, Quakertown, PA 18951"/>
            <Blurb title="Holiday Inn Express & Suites Quakertown" link="https://www.ihg.com/holidayinnexpress/hotels/us/en/quakertown/qktpa/hoteldetail?cm_mmc=GoogleMaps-_-EX-_-US-_-QKTPA" linkTitle="More Information Here" text="1918 John Fries Hwy, Quakertown, PA 18951"/>

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
                <Blurb title="Elizabeth Morgan" subtitle="Maid of Honor"  text="Katie and Elizabeth lived together in their first years of college. Even after changing schools, they never fail to keep in contact and Elizabeth always sends Katie funny videos." />
              </div>
              <div className="person-img">
                <img className="small-img" src={GE} alt='Genevieve'/>
                <Blurb title="Genevieve Emanuel" subtitle="Bridesmaid" text="Genevieve and Katie also lived together in college. They love to sit and chat for hours about anything and everything." />
              </div>              
              <div className="person-img">
                <img className="small-img" src={Geva} alt='Geneva'/>
                <Blurb title="Geneva Dardick" subtitle="Bridesmaid" text="Katie and Geneva met at their side hobby, dance class! After lots of classes and dance concerts together, Katie decided she basically lives at the Dardick's house." />
              </div>
              <div className="person-img">
                <img className="small-img" src={shea} alt='Shea'/>
                <Blurb title="Shea Elliott" subtitle="Bridesmaid" text="Shea met Katie at the beginning of their college careers. Shea enjoys taking Katie to her local library's booksale.  " />
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
            <div className="banner">
                <div className="title">
                  <h3>Food & Bar Menu</h3>
                </div> 
            </div> {/*banner*/}


            <div className="schedule">
              <div className="sched-info menus">
                <div id="food">
                  <h3>Food</h3>
                  <p>Appetizers</p>
                  <h4>Flatbread pizza slices</h4>
                  <h4>Pita and Hummus</h4>
                  
                  <br/>
                  <p>Main</p>
                  <h4>Pulled Pork</h4>
                  <h4>Beef Brisket</h4>
                  <h4>Greek Salad</h4>
                  <h4>Macaroni and Cheese</h4>
                  <h4>Street Corn</h4>
                </div>
                <div>
                  <h3>Bar</h3>
                  <p>Note: There will be a select menu of wine, beer, and Katie & Joseph each have a specialty drink for guests to enjoy. Other drink options are available to purchase.</p>
                  <br/>
                  <h4>Katie: Red Coat (gin and tonic)</h4>
                  <br/>
                  <h4>Joseph: Horse Thief (like a long island)</h4>
                </div>
              </div> {/*sched-info*/}
            </div> {/*schedule*/}

            
          </div> {/*food*/}
        </div> {/*menu*/}


        <div className="other"> 

          <div className="banner details">
              <div className="title">
                <h1>Other Information</h1>
              </div> 
          </div> {/*details-banner*/}

          <div className="information">
            <Blurb title="What should I wear?" text="Out of the respect for our Lord, the Bride and Groom request that guests dress modestly in the style required at St. Peter's Basilica in Rome: namely, that the shoulders and knees are covered for both men and women, with no form fitting clothing or revealing necklines." />
            <Blurb title="When is the RSVP deadline?" text="Please RSVP by September 1st, 2022 so we can be best prepared to celebrate with you!" />
            <Blurb title="Can I bring a date?" text="We unfortunately cannot accommodate additional guests. Due to limited capacity at the reception, we can only allow the people named on the RSVP." />
            <Blurb title="Note about the Ceremony & Mass **IMPORTANT**" text="Following the ceremony there will be a Nuptial Mass in the Extraordinary form of the Roman Rite. Prayers, responses, and hymns will be said in Latin. The church will have booklets for all attendees so that they may follow along with this beautiful form of the Catholic Liturgy. The expected length of the ceremony and Mass together is about two hours. We left time in between the ceremony and reception for travel since we know it will be a little longer of a drive! Thanks :)" />
            <Blurb title="Additional note about the Mass **Communion**" text="Since the ceremony will be followed by Mass, Holy Communion will be available. Attendants are reminded that only practicing Catholics in a state of grace may recieve Communion. In the Extraordinary Form, communion is received on the tongue at the altar rail. To properly receive, please kneel at the rail (if able) and close your eyes before the priest comes to you." />
            <Blurb title="Where can I park?" text="The church has a small parking lot off of Maple, and there is a parking garage on the corner of Hector and Robinson Alley. Try carpooling! Especially for the reception. While there is a parking garage near the church for the ceremony, the Trolley Barn has limited parking in their own lot and there is no close parking garage. The Trolley Barn has a little market alongside their event spaces, so the public will also be occupying the parking lots during the day." />
            <img className="map-img" src={maryParking} alt="Parking Map"/>
            <Blurb title="Is there a gift registry?" text="There is not a specific gift registry. Your presence at our wedding is a gift in in itself, but if you feel inclined to give more, please contribute in the best way you see fit! Below is a little more about us if you're looking for something special." />
            <Blurb title="More about Katie & Joseph" text=" We love to do many things together in our free time at home or traveling. We love anything outdoors, and will take walks in the neighborhood or hit the trails for a hike! We try and visit the best trails with waterfalls, scenic overlooks, or lots of rocks to climb. On days we are feeling lazy, or it is just too cold out for a hike, we love to cook! From homemade pierogies to gnocchi to fresh sorbet or even homemade bread, we love to try something new. Katie adores plants and flowers and has even started to press them into art! Joseph loves to go biking, play video games, and code!"/>
            <Blurb title="Sharing photos" text="Katie adores looking back at fond memories, so be sure to share photos from our wedding day! We are thinking of starting a hashtag if you want to tag on instagram! Check back here for the hashtag closer to the big day. " />
            <br/><br/>
          </div> {/*information*/}

        </div> {/*other*/}



      </div> {/*details*/}

      <div id="waves">
        <svg class="waves det" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
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

export default Details