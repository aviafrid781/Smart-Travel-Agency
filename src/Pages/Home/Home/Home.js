import React from 'react';
import { Spinner } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';
import AboutUs from '../AboutUs/AboutUs';
import BackGroundImg from '../BackGroundImg/BackGroundImg';
import FAQ from '../FAQ/FAQ';
import OfferBanner from '../OfferBanner/OfferBanner';
import Services from '../Services/Services';

const Home = () => {
    const { user } = useAuth();
    return (
        <div>

            <OfferBanner></OfferBanner>
            <Services></Services>
            <AboutUs></AboutUs>
            <BackGroundImg></BackGroundImg>
            <FAQ></FAQ>

        </div>
    );
};

export default Home;