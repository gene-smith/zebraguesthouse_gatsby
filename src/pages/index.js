import React from 'react'

import HeroImage from '../components/heroImage';
import Features from '../components/features';
import ContactBanner from '../components/contactBanner';
import Pricing from '../components/pricing';
import ImageGallery from '../components/imageGallery';

class IndexPage extends React.Component {

  render() {

    return (
      <div>

        <HeroImage/>
        <Features/>
        <ContactBanner/>
        <Pricing/>
        <ImageGallery/>

      </div>
    )
  }
}

export default IndexPage