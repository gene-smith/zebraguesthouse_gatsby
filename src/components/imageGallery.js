import React from 'react'
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

class ImageGallery extends React.Component {

    render() {

        var Decorators = [
            {
                component: React.createClass({
                    render() {
                        return (
                            <button onClick={this.props.previousSlide}>
                                Previous Slide
                            </button>
                        )
                    }
                }),
                position: 'CenterLeft',
                style: {
                    padding: 20
                }
            }
        ];

        return (
            <div className="container">
                <div className="row centered">
                    <h1 className="mb">Sights around the Zebra Guest House</h1>
                    <br/><br/>
                    <Carousel decorators={Decorators} dragging={true}>
                        <img src={homepage1Img}/>
                        <img src={homepage3Img}/>
                        <img src={homepage6Img}/>
                        <img src={homepage7Img}/>
                        <img src={facilities1Img}/>
                        <img src={facilities2Img}/>
                        <img src={facilities3Img}/>
                        <img src={services1Img}/>
                        <img src={services2Img}/>
                        <img src={services3Img}/>
                    </Carousel>
                    <p>&nbsp;</p>
                </div>
            </div>
        )
    }
}

export default ImageGallery