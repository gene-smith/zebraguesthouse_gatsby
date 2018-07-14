import React from 'react'
import Link from 'gatsby-link'

import Carousel from 'nuka-carousel';

import homepage1Img from '../img/homepage/homepage1.jpg'
import homepage3Img from '../img/homepage/homepage3.jpg'
import homepage6Img from '../img/homepage/homepage6.jpg'
import homepage7Img from '../img/homepage/homepage7.jpeg'
import facilities1Img from '../img/facilities/facilities1.jpg'
import facilities2Img from '../img/facilities/facilities2.jpg'
import facilities3Img from '../img/facilities/facilities3.jpg'
import services1Img from '../img/services/services1.jpg'
import services2Img from '../img/services/services2.jpg'
import services3Img from '../img/services/services3.jpg'

class IndexPage extends React.Component {

  
  render () {

    var Decorators = [{
      component: React.createClass({
        render() {
          return (
            <button
              onClick={this.props.previousSlide}>
              Previous Slide
            </button>
          )
        }
      }),
      position: 'CenterLeft',
      style: {
        padding: 20
      }
    }];

    return (
      <div>
        <div className="header">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 centered">
                <h1>Welcome to the Zebra Guest House, established in October 2002 we are a family-owned private business.</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="container ptb">
          <div className="row">
            <div className="col-md-12 centered">
              <h1>Features</h1>
            </div>
            <div className="col-md-4">
              <div className="centered"><h3>Close to the Airport</h3></div>
                <p className="mt">It is conveniently located in Kalundu, a quiet and secure suburb of Lusaka just 20 minutes drive from the Lusaka International Airport and the Lusaka business center.</p>
            </div>
            <div className="col-md-4">
              <div className="centered"><h3>Great Shopping</h3></div>
                <p className="mt">Zebra Guest House is also in close proximity to two modern shopping malls - Manda Hill and Arcades. Arcades shopping mall has a flea market every Sunday where traditional artifacts are displayed and sold.</p>
            </div>
            <div className="col-md-4">
              <div className="centered"><h3>Excellent Service</h3></div>
                <p className="mt">Your hosts are long time residents of Lusaka, well traveled within Zambia and can advise you on other tourist attractions that maybe of interest to you within the country. Many of our guests return year after year and many recommend us to their friends. We are a business that survives on word of mouth.</p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4">
              <div className="centered"><h3>Amenities</h3></div>
                <p className="mt">In addition to accommodation the guest house provides conference facilities and outside catering all at very reasonable rates. We pride ourselves in the high level of cleanliness, hospitality and mouth watering meals we provide.</p>
            </div>
            <div className="col-md-4">
              <div className="centered"><h3>The Restaurant</h3></div>
                <p className="mt">The spacious restaurant serves two meals only: Breakfast and Dinner. A variety of local and international cuisines are available. Guests are also welcome to stroll and enjoy the beautiful surroundings.</p>
            </div>
            <div className="col-md-4">
              <div className="centered"><h3>Accommodation</h3></div>
                <p className="mt">Zebra Guest House offers 16 ensuite rooms that vary in size. The room rates also vary accordingly and are exclusive of the cost of continental Breakfast. See Pricing for costs.</p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-1"></div>
              <div className="col-md-10">
                <div className="centered"><h3>Additional Services</h3></div>
                  <p className="mt">The restaurant serves breakfast and dinner only with a variety of local and international cuisines.<br /><br />
  
                  Guests are welcome to dine in our spacious restaurant or, when the weather is right, in the front yard. Guests are also welcome to stroll and enjoy the beautiful surroundings.<br /><br />
              
                  Each room has satellite television channels such as BBC, CNN, Super Sport, and various movie channels. Free wireless internet service is available to our guests. Laundry services are provided on request at a minimal fee.</p>
              </div>
            <div className="col-md-1"></div>
          </div>
        </div>

        <div id="sep">
          <div className="container" id="contact">
            <div className="row centered">
              <div className="col-md-8 col-md-offset-2">
                <h1>Experience the real Zambia and stay at the Zebra Guest House</h1>

                <p>
                  <a href="#contact2"><button className="btn btn-conf-2 btn-green">
                    Contact Us
                  </button></a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container ptb" id="prices">
          <div className="row centered">
            <h1 className="mb">Our Prices</h1>
            The room rates have been reduced (since 1st March 2017) and guests are now encouraged to take advantage of this offer. 
            <br /><br />
            <div className="col-md-4">
              <div className="price-table">
                <div className="p-head">
                  Small Room
                </div>
                <div className="p-body">
                  <ul className="features">
                    <li>Wi-Fi</li>
                    <li>Double Bed</li>
                    <li>Additional single bed for additional USD 8</li>
                    <li>Satellite TV</li>
                    <li>Airport Transporation for minimum USD 25</li>
                    <li>Continental Breakfast for additional USD 4 (per person)</li>
                    <li>Full Breakfast for additional USD 8 (per person)</li>
                    <li>Dinner</li>
                    <li>Laundry upon request at a minimal fee</li>
                  </ul>

                  <div className="price">
                   <span className="sub">USD</span>
                    <span className="detail">30</span>
                    <span className="sub">/day</span>
                  </div>
                </div>
              </div>
            </div>
  
            <div className="col-md-4">
              <div className="price-table">
                <div className="p-head">
                  Standard
                </div>
                
                <div className="p-body">
                  <ul className="features">
                    <li>Wi-Fi</li>
                    <li>Double Bed</li>
                    <li>Additional single bed for additional USD 8</li>
                    <li>Satellite TV</li>
                    <li>Airport Transporation for minimum USD 25</li>
                    <li>Continental Breakfast for additional USD 4 (per person)</li>
                    <li>Full Breakfast for additional USD 8 (per person)</li>
                    <li>Dinner</li>
                    <li>Laundry upon request at a minimal fee</li>
                  </ul>

                  <div className="price">
                    <span className="sub">USD</span>
                    <span className="detail">40</span>
                    <span className="sub">/day</span>
                  </div>
                </div>
              </div>
            </div>
  
            <div className="col-md-4">
              <div className="price-table">
                <div className="p-head">
                  Executive
                </div>
              
                <div className="p-body">
                  <ul className="features">
                    <li>Wi-Fi</li>
                    <li>Double Bed</li>
                    <li>Additional single bed for additional USD 8</li>
                    <li>Satellite TV</li>
                    <li>Airport Transporation for minimum USD 25</li>
                    <li>Continental Breakfast for additional USD 4 (per person)</li>
                    <li>Full Breakfast for additional USD 8 (per person)</li>
                    <li>Dinner</li>
                    <li>Laundry upon request at a minimal fee</li>
                  </ul>
                  <div className="price">
                    <span className="sub">USD</span>
                    <span className="detail">45</span>
                    <span className="sub">/day</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

                
        <div className="container">
          <div className="row centered">
          <h1 className="mb">Sights around the Zebra Guest House</h1>
          <br /><br />
            <Carousel decorators={Decorators} dragging={true}>
              <img
                src={homepage1Img} />
              <img
                src={homepage3Img} />
              <img
                src={homepage6Img} />
              <img
                src={homepage7Img} />
              <img
              src={facilities1Img} />
              <img
              src={facilities2Img} />
              <img
              src={facilities3Img} />                                                
              <img
              src={services1Img} />  
              <img
              src={services2Img} />  
              <img
              src={services3Img} />  
          </Carousel>
          <p>&nbsp;</p>
          </div>
        </div>

      </div>
    )
  }
}

export default IndexPage