import React from 'react'

const Pricing = () => (
    <div className="container ptb" id="prices">
        <div className="row centered">
            <h1 className="mb">Our Prices</h1>
            The room rates have been reduced (since 1st March 2017) and guests are now
            encouraged to take advantage of this offer.
            <br/><br/>
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
)

export default Pricing;
