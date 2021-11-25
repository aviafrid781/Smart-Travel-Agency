import React from 'react';
import { Carousel } from 'react-bootstrap';

const OfferBanner = () => {
    return (
        <>

            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 pt-5"
                        src={'https://www.hawaiidiscount.com/Portals/0/Waipio-Valley-and-Hamakua-Coast-Tour.jpg'}
                        alt="First slide"
                    />
                    <Carousel.Caption>

                        <h3>Welcome to SMART Travel Agency </h3>
                        <p>Build Your Dream  World tours</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={'https://otiumtravelph.files.wordpress.com/2016/10/international-tours-banner.jpg'}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Welcome to SMART Travel Agency</h3>
                        <p>Build Your Dream  World tours</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={'https://png.pngtree.com/background/20210711/original/pngtree-travel-season-global-travel-banner-picture-image_1118691.jpg'}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Welcome to SMART Travel Agency</h3>
                        <p>Build Your Dream World tours</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </>
    );
};

export default OfferBanner;