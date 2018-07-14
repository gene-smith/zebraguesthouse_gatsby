import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Ionicon from 'react-ionicons'

import './../scss/index.scss'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Zebra Guest House"
      meta={[
        { name: 'description', content: 'Zebra Guest House' },
        { name: 'keywords', content: 'guest house, lusaka, zambia' },
      ]}
    />
    <div>
      <div className="menu">
        <div className="logo">ZEBRA GUEST HOUSE</div>
        <div className="navbar navbar-expand-sm menu-list hidden-xs">
          <Link to="/">Home</Link>
          <Link to="#prices">Prices</Link>
          <Link to="#contact">Contact Us</Link>
          </div>
        <div className="clear"></div>
      </div>
      {children()}
      <div className="footer">
        <div className="container" id="contact2">
          <div className="row">
            <div className="col-md-6">
              <h4>Postal mail:</h4>
              Zebra Guest House<br />
              Lufubu Road, Kalundu<br />
              P.O Box 36531<br />
              Lusaka, Zambia

              <p>&nbsp;</p>
              <h4>Telephone:</h4>
              landline: <a href="tel:011260211293205">+260 211 293205</a><br />
              cell: <a href="tel:011260977489800">+260 977 489800</a>
    
              <p>&nbsp;</p><h4>E-mail:</h4>
              <a href="mailto:zebraguesthouse2012@gmail.com">zebraguesthouse2012@gmail.com</a>

              <p>&nbsp;</p><h4>We're also here:</h4>
              <a href="https://www.facebook.com/zebraguesthouse" target="_blank"><Ionicon icon="logo-facebook" fontSize="35px" color="white"/></a>   
              <a href="https://twitter.com/zebraguesthouse" target="_blank"><Ionicon icon="logo-twitter" fontSize="35px" color="white"/></a>    
              <a href="skype:zebraguesthouse1?call"><Ionicon icon="logo-skype" fontSize="35px" color="white"/></a>  
            </div>

            <div className="col-md-6">
              <h4>Location</h4><p></p>
              <iframe src="https://www.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=Zebra+Guest+House,+Lusaka,+Zambia&amp;aq=0&amp;oq=Zebra+Guest+Hou&amp;sll=34.705493,-76.223145&amp;sspn=4.912485,11.381836&amp;ie=UTF8&amp;hq=Zebra+Guest+House,&amp;hnear=Lusaka,+Zambia&amp;ll=-15.377814,28.331112&amp;spn=0.066834,0.096679&amp;t=m&amp;z=15&amp;output=embed" width="425" height="350"></iframe><br />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 centered">
              <p>&nbsp;</p>
              <p>© Copyright 2009-2018 by Zebra Guest House. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper